import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../public/sw.js", import.meta.url), "utf8");

function worker({ storageUnavailable = false } = {}) {
  const listeners = {};
  const actions = [];
  vm.runInNewContext(source, {
    self: {
      addEventListener: (name, handler) => { listeners[name] = handler; },
      skipWaiting: async () => { actions.push("skipWaiting"); },
      registration: { unregister: async () => { actions.push("unregister"); } },
      clients: {
        claim: async () => { actions.push("claim"); },
        matchAll: async ({ type }) => {
          assert.equal(type, "window");
          return ["https://example.com/about?ref=cv#bio", "https://example.com/"].map((url, index) => ({
            url,
            navigate: async (destination) => {
              actions.push(destination);
              // A tab closing during migration must not block other tabs.
              if (index === 0) throw new Error("Tab closed");
            },
          }));
        },
      },
    },
    caches: {
      keys: async () => {
        if (storageUnavailable) throw new Error("Storage unavailable");
        return ["gatsby-plugin-offline-precache-v2", "gatsby-plugin-offline-runtime", "unrelated-cache"];
      },
      delete: async (name) => {
        actions.push(`delete:${name}`);
        if (name.endsWith("runtime")) throw new Error("Cache deletion failed");
      },
    },
  });
  const dispatch = (name) => new Promise((resolve, reject) => {
    listeners[name]({ waitUntil: (promise) => promise.then(resolve, reject) });
  });
  return { listeners, actions, dispatch };
}

test("retires Gatsby worker, preserves unrelated caches and reloads every client", async () => {
  const { listeners, actions, dispatch } = worker();
  assert.equal(listeners.fetch, undefined);
  await dispatch("install");
  await dispatch("activate");
  assert.deepEqual(actions, [
    "skipWaiting", "claim", "delete:gatsby-plugin-offline-precache-v2",
    "delete:gatsby-plugin-offline-runtime", "unregister",
    "https://example.com/about?ref=cv#bio", "https://example.com/",
  ]);
});

test("still unregisters and reloads when Cache Storage is unavailable", async () => {
  const { actions, dispatch } = worker({ storageUnavailable: true });
  await dispatch("activate");
  assert.ok(actions.includes("unregister"));
  assert.ok(actions.includes("https://example.com/"));
});
