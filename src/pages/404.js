import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
const H1 = styled.h1`
  margin-bottom: 1.25rem;
`
const P = styled.p`
  font-size: 1.25rem;
`
const SVG = styled.svg`
  width: 90%;
  @media (min-width: 30rem) {
    max-width: 30rem;
  }
`

const NotFoundPage = () => (
  <StyledLayout>
    <SEO title="404 Not found" />
    <H1>Page not found</H1>
    <P>The page you are looking for does not exist or is unavailable.</P>
    <SVG
      width="920"
      height="374"
      viewBox="0 0 920 374"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M459.59 373.982C713.335 373.982 919.037 360.364 919.037 343.566C919.037 326.767 713.335 313.149 459.59 313.149C205.845 313.149 0.143555 326.767 0.143555 343.566C0.143555 360.364 205.845 373.982 459.59 373.982Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M441.981 10.587C367.124 10.587 313.378 58.6128 313.378 170.673C313.378 297.674 367.124 331.292 441.981 331.292C516.837 331.292 573.785 294.473 573.785 170.673C573.785 38.3353 516.837 10.587 441.981 10.587ZM442.473 289.137C390.625 289.137 363.538 258.719 363.538 170.755C363.538 93.1395 391.734 52.2094 443.581 52.2094C495.429 52.2094 523.624 79.0948 523.624 170.755C523.624 256.501 494.32 289.137 442.473 289.137Z"
        fill="currentColor"
      />
      <path
        d="M268.554 242.711H237.604V151.572C237.604 146.731 235.681 142.088 232.258 138.665C228.835 135.243 224.193 133.32 219.352 133.32H212.1C209.703 133.32 207.329 133.792 205.115 134.709C202.9 135.626 200.888 136.971 199.193 138.665C197.498 140.36 196.154 142.372 195.237 144.587C194.319 146.801 193.847 149.175 193.847 151.572V242.711H106.548C104.752 242.711 102.987 242.247 101.423 241.364C99.8592 240.481 98.5504 239.208 97.6234 237.67C96.6964 236.132 96.1827 234.38 96.1322 232.585C96.0817 230.79 96.496 229.012 97.335 227.424L189.732 52.5465C190.883 50.3662 191.582 47.9751 191.784 45.5176C191.986 43.06 191.689 40.5869 190.909 38.2476C190.129 35.9083 188.883 33.7512 187.247 31.9067C185.61 30.0621 183.617 28.5682 181.387 27.5153L175.933 24.9396C171.697 22.9396 166.855 22.6443 162.409 24.1148C157.962 25.5852 154.25 28.7089 152.042 32.8395L39.3523 243.647C37.4334 247.237 36.4294 251.245 36.4294 255.315V255.315C36.4294 258.565 37.0696 261.784 38.3134 264.786C39.5572 267.789 41.3803 270.518 43.6785 272.816C45.9768 275.114 48.7052 276.937 51.7079 278.181C54.7107 279.425 57.9291 280.065 61.1793 280.065H193.847V337.696C193.847 340.569 194.413 343.414 195.513 346.068C196.612 348.723 198.224 351.135 200.255 353.166C202.287 355.198 204.699 356.809 207.353 357.909C210.008 359.008 212.853 359.574 215.726 359.574H215.726C218.599 359.574 221.444 359.008 224.098 357.909C226.753 356.809 229.164 355.198 231.196 353.166C233.228 351.135 234.839 348.723 235.939 346.068C237.038 343.414 237.604 340.569 237.604 337.696V280.065H268.554C273.507 280.065 278.258 278.097 281.76 274.595C285.263 271.092 287.231 266.342 287.231 261.388V261.388C287.231 256.435 285.263 251.684 281.76 248.182C278.258 244.679 273.507 242.711 268.554 242.711V242.711Z"
        fill="currentColor"
      />
      <path
        d="M841.662 242.711H810.712V151.572C810.712 146.731 808.789 142.088 805.366 138.665C801.943 135.243 797.3 133.32 792.459 133.32H785.207C782.81 133.32 780.437 133.792 778.222 134.709C776.008 135.626 773.996 136.971 772.301 138.665C770.606 140.36 769.262 142.372 768.344 144.587C767.427 146.801 766.955 149.175 766.955 151.572V242.711H679.656C677.86 242.711 676.094 242.247 674.531 241.364C672.967 240.481 671.658 239.208 670.731 237.67C669.804 236.132 669.29 234.38 669.24 232.585C669.189 230.79 669.604 229.012 670.443 227.424L762.839 52.5465C763.991 50.3663 764.689 47.9752 764.892 45.5176C765.094 43.06 764.796 40.5869 764.016 38.2476C763.237 35.9083 761.991 33.7512 760.354 31.9067C758.718 30.0621 756.725 28.5682 754.495 27.5153L749.04 24.9396C744.805 22.9396 739.963 22.6443 735.516 24.1148C731.069 25.5852 727.358 28.7089 725.15 32.8395L612.46 243.647C610.541 247.237 609.537 251.245 609.537 255.315V255.315C609.537 261.879 612.145 268.174 616.786 272.816C621.428 277.457 627.723 280.065 634.287 280.065H766.955V337.696C766.955 343.498 769.26 349.063 773.363 353.166C777.466 357.269 783.031 359.574 788.833 359.574V359.574C794.636 359.574 800.201 357.269 804.304 353.166C808.407 349.063 810.712 343.498 810.712 337.696V280.065H841.662C846.615 280.065 851.365 278.097 854.868 274.595C858.371 271.092 860.338 266.342 860.338 261.388V261.388C860.338 256.435 858.371 251.684 854.868 248.182C851.365 244.679 846.615 242.712 841.662 242.711Z"
        fill="currentColor"
      />
      <path
        d="M277.092 232.039H246.142V140.899C246.142 138.503 245.67 136.129 244.753 133.915C243.836 131.7 242.491 129.688 240.796 127.993C239.101 126.298 237.089 124.954 234.875 124.037C232.66 123.119 230.287 122.647 227.89 122.647H220.638C215.797 122.647 211.154 124.57 207.731 127.993C204.308 131.416 202.385 136.059 202.385 140.899V232.039H115.086C113.29 232.039 111.525 231.575 109.961 230.692C108.397 229.808 107.088 228.536 106.162 226.998C105.235 225.459 104.721 223.708 104.67 221.912C104.62 220.117 105.034 218.339 105.873 216.752L198.27 41.8742C199.422 39.6939 200.12 37.3028 200.322 34.8452C200.524 32.3877 200.227 29.9146 199.447 27.5752C198.667 25.2359 197.421 23.0789 195.785 21.2343C194.148 19.3897 192.155 17.8959 189.925 16.8429L184.471 14.2672C180.236 12.2672 175.394 11.9719 170.947 13.4424C166.5 14.9128 162.788 18.0365 160.58 22.1671L47.8904 232.975C45.9715 236.565 44.9675 240.572 44.9675 244.643V244.643C44.9675 251.207 47.5751 257.502 52.2166 262.143C56.8581 266.785 63.1533 269.393 69.7174 269.393H202.385V327.023C202.385 329.897 202.951 332.741 204.051 335.396C205.15 338.05 206.762 340.462 208.793 342.494C210.825 344.525 213.237 346.137 215.891 347.236C218.546 348.336 221.391 348.902 224.264 348.902H224.264C230.066 348.902 235.631 346.597 239.734 342.494C243.837 338.391 246.142 332.826 246.142 327.023V269.393H277.092C279.545 269.393 281.973 268.909 284.239 267.971C286.505 267.032 288.564 265.657 290.298 263.922C292.033 262.188 293.408 260.129 294.347 257.863C295.286 255.597 295.769 253.169 295.769 250.716V250.716C295.769 248.263 295.286 245.835 294.347 243.569C293.408 241.303 292.033 239.244 290.298 237.509C288.564 235.775 286.505 234.399 284.239 233.461C281.973 232.522 279.545 232.039 277.092 232.039V232.039Z"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
      <path
        d="M857.67 232.039H826.72V140.899C826.72 136.059 824.797 131.416 821.374 127.993C817.951 124.57 813.309 122.647 808.468 122.647H801.216C798.819 122.647 796.445 123.119 794.231 124.037C792.016 124.954 790.004 126.298 788.309 127.993C786.615 129.688 785.27 131.7 784.353 133.915C783.436 136.129 782.963 138.503 782.963 140.899V232.039H695.664C693.868 232.039 692.103 231.575 690.539 230.692C688.975 229.808 687.667 228.536 686.74 226.998C685.813 225.459 685.299 223.708 685.248 221.912C685.198 220.117 685.612 218.339 686.451 216.752L778.848 41.8742C780 39.6939 780.698 37.3028 780.9 34.8452C781.103 32.3877 780.805 29.9146 780.025 27.5752C779.245 25.2359 777.999 23.0789 776.363 21.2343C774.726 19.3897 772.733 17.8959 770.503 16.8429L765.049 14.2672C760.814 12.2672 755.972 11.9719 751.525 13.4424C747.078 14.9128 743.366 18.0365 741.158 22.1671L628.469 232.975C626.55 236.565 625.546 240.572 625.546 244.643C625.546 251.207 628.153 257.502 632.795 262.143C637.436 266.785 643.731 269.393 650.296 269.393H782.963V327.023C782.963 332.826 785.268 338.391 789.371 342.494C793.474 346.597 799.039 348.902 804.842 348.902V348.902C810.644 348.902 816.209 346.597 820.312 342.494C824.415 338.391 826.72 332.826 826.72 327.023V269.393H857.67C860.123 269.393 862.551 268.909 864.817 267.971C867.083 267.032 869.142 265.657 870.877 263.922C872.611 262.188 873.987 260.129 874.925 257.863C875.864 255.597 876.347 253.169 876.347 250.716V250.716C876.347 245.762 874.379 241.012 870.877 237.509C867.374 234.007 862.624 232.039 857.67 232.039V232.039Z"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
      <path
        d="M459.056 0.981934C384.2 0.981934 330.454 49.0077 330.454 161.068C330.454 288.069 384.2 321.687 459.056 321.687C533.913 321.687 590.861 284.868 590.861 161.068C590.861 28.7302 533.913 0.981934 459.056 0.981934ZM459.549 279.531C407.701 279.531 380.614 249.114 380.614 161.15C380.614 83.5344 408.81 42.6043 460.657 42.6043C512.505 42.6043 540.7 69.4897 540.7 161.15C540.7 246.896 511.396 279.531 459.549 279.531V279.531Z"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
    </SVG>
  </StyledLayout>
)

export default NotFoundPage