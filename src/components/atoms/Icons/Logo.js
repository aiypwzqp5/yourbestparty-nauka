import React from "react";

const Logo = ({ isBlack }) => (
  <svg
    width="175"
    height="38"
    viewBox="0 0 175 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6133 16.3242H4.34766L4.30859 12.5352H10.5391C11.6068 12.5352 12.4987 12.3854 13.2148 12.0859C13.931 11.7865 14.4714 11.3503 14.8359 10.7773C15.2135 10.2044 15.4023 9.50781 15.4023 8.6875C15.4023 7.77604 15.2266 7.03385 14.875 6.46094C14.5365 5.88802 14.0026 5.47135 13.2734 5.21094C12.5443 4.9375 11.6198 4.80078 10.5 4.80078H6.08594V29H0.714844V0.5625H10.5C12.1146 0.5625 13.5534 0.71875 14.8164 1.03125C16.0924 1.33073 17.1732 1.79948 18.0586 2.4375C18.944 3.07552 19.6146 3.8763 20.0703 4.83984C20.5391 5.80339 20.7734 6.94922 20.7734 8.27734C20.7734 9.44922 20.5 10.5299 19.9531 11.5195C19.4193 12.4961 18.5924 13.2904 17.4727 13.9023C16.3659 14.5143 14.9596 14.8659 13.2539 14.957L11.6133 16.3242ZM11.3789 29H2.76562L5.01172 24.7812H11.3789C12.4466 24.7812 13.3255 24.6055 14.0156 24.2539C14.7188 23.9023 15.2396 23.4206 15.5781 22.8086C15.9297 22.1836 16.1055 21.4674 16.1055 20.6602C16.1055 19.7747 15.9492 19.0065 15.6367 18.3555C15.3372 17.7044 14.8555 17.2031 14.1914 16.8516C13.5404 16.5 12.681 16.3242 11.6133 16.3242H6.02734L6.06641 12.5352H13.1758L14.4062 14C16.0469 14.013 17.3815 14.3385 18.4102 14.9766C19.4518 15.6146 20.2201 16.4349 20.7148 17.4375C21.2096 18.4401 21.457 19.5208 21.457 20.6797C21.457 22.5026 21.0599 24.0326 20.2656 25.2695C19.4844 26.5065 18.3385 27.4375 16.8281 28.0625C15.3307 28.6875 13.5143 29 11.3789 29ZM35.207 29.3906C33.6055 29.3906 32.1667 29.1302 30.8906 28.6094C29.6146 28.0885 28.5273 27.3659 27.6289 26.4414C26.7435 25.5039 26.0599 24.4167 25.5781 23.1797C25.1094 21.9297 24.875 20.5885 24.875 19.1562V18.375C24.875 16.7474 25.1094 15.2695 25.5781 13.9414C26.0469 12.6003 26.7109 11.4479 27.5703 10.4844C28.4297 9.52083 29.4583 8.77865 30.6562 8.25781C31.8542 7.73698 33.1758 7.47656 34.6211 7.47656C36.1185 7.47656 37.4401 7.73047 38.5859 8.23828C39.7318 8.73307 40.6888 9.4362 41.457 10.3477C42.2253 11.2591 42.8047 12.3529 43.1953 13.6289C43.5859 14.8919 43.7812 16.2917 43.7812 17.8281V19.9961H27.2188V16.4414H38.7031V16.0508C38.6771 15.2305 38.5208 14.4818 38.2344 13.8047C37.9479 13.1146 37.5052 12.5677 36.9062 12.1641C36.3073 11.7474 35.5326 11.5391 34.582 11.5391C33.8138 11.5391 33.1432 11.7083 32.5703 12.0469C32.0104 12.3724 31.5417 12.8411 31.1641 13.4531C30.7995 14.0521 30.526 14.7682 30.3438 15.6016C30.1615 16.4349 30.0703 17.3594 30.0703 18.375V19.1562C30.0703 20.0417 30.1875 20.862 30.4219 21.6172C30.6693 22.3724 31.0273 23.0299 31.4961 23.5898C31.9779 24.1367 32.5508 24.5664 33.2148 24.8789C33.8919 25.1784 34.6602 25.3281 35.5195 25.3281C36.6003 25.3281 37.5768 25.1198 38.4492 24.7031C39.3346 24.2734 40.1029 23.6419 40.7539 22.8086L43.3516 25.5039C42.9089 26.1549 42.3099 26.7799 41.5547 27.3789C40.8125 27.9779 39.9141 28.4661 38.8594 28.8438C37.8047 29.2083 36.5872 29.3906 35.207 29.3906ZM58.8594 23.2188C58.8594 22.776 58.7422 22.3789 58.5078 22.0273C58.2734 21.6758 57.8307 21.3568 57.1797 21.0703C56.5417 20.7708 55.6042 20.4909 54.3672 20.2305C53.2734 19.9961 52.2643 19.7031 51.3398 19.3516C50.4154 19 49.6211 18.5768 48.957 18.082C48.293 17.5742 47.7721 16.9818 47.3945 16.3047C47.0299 15.6146 46.8477 14.8203 46.8477 13.9219C46.8477 13.0495 47.0365 12.2292 47.4141 11.4609C47.7917 10.6797 48.3385 9.99609 49.0547 9.41016C49.7708 8.8112 50.6432 8.34245 51.6719 8.00391C52.7005 7.65234 53.8594 7.47656 55.1484 7.47656C56.9453 7.47656 58.4883 7.76953 59.7773 8.35547C61.0794 8.94141 62.0755 9.7487 62.7656 10.7773C63.4557 11.793 63.8008 12.9388 63.8008 14.2148H58.6445C58.6445 13.6549 58.5143 13.1471 58.2539 12.6914C58.0065 12.2357 57.6224 11.8711 57.1016 11.5977C56.5807 11.3112 55.9232 11.168 55.1289 11.168C54.4128 11.168 53.8073 11.2852 53.3125 11.5195C52.8307 11.7539 52.4661 12.0599 52.2188 12.4375C51.9714 12.8151 51.8477 13.2318 51.8477 13.6875C51.8477 14.026 51.9128 14.332 52.043 14.6055C52.1862 14.8659 52.4141 15.1068 52.7266 15.3281C53.0391 15.5495 53.4622 15.7513 53.9961 15.9336C54.543 16.1159 55.2135 16.2917 56.0078 16.4609C57.5833 16.7734 58.957 17.1901 60.1289 17.7109C61.3138 18.2188 62.2383 18.8958 62.9023 19.7422C63.5664 20.5885 63.8984 21.6693 63.8984 22.9844C63.8984 23.9219 63.6966 24.7812 63.293 25.5625C62.8893 26.3307 62.3034 27.0013 61.5352 27.5742C60.7669 28.1471 59.849 28.5964 58.7812 28.9219C57.7135 29.2344 56.5091 29.3906 55.168 29.3906C53.2279 29.3906 51.5872 29.0456 50.2461 28.3555C48.9049 27.6523 47.8893 26.7669 47.1992 25.6992C46.5091 24.6185 46.1641 23.4987 46.1641 22.3398H51.1055C51.1445 23.1602 51.3659 23.8177 51.7695 24.3125C52.1732 24.8073 52.681 25.1654 53.293 25.3867C53.918 25.5951 54.5755 25.6992 55.2656 25.6992C56.0469 25.6992 56.7044 25.5951 57.2383 25.3867C57.7721 25.1654 58.1758 24.8724 58.4492 24.5078C58.7227 24.1302 58.8594 23.7005 58.8594 23.2188ZM77.8242 7.86719V11.5781H65.7148V7.86719H77.8242ZM68.957 2.67188H74.1328V22.9062C74.1328 23.5312 74.2174 24.013 74.3867 24.3516C74.556 24.6901 74.8099 24.918 75.1484 25.0352C75.487 25.1523 75.8906 25.2109 76.3594 25.2109C76.6979 25.2109 77.0104 25.1914 77.2969 25.1523C77.5833 25.1133 77.8242 25.0742 78.0195 25.0352L78.0391 28.9023C77.6094 29.0456 77.1211 29.1628 76.5742 29.2539C76.0404 29.3451 75.4349 29.3906 74.7578 29.3906C73.599 29.3906 72.5833 29.1953 71.7109 28.8047C70.8385 28.401 70.1615 27.7565 69.6797 26.8711C69.1979 25.9727 68.957 24.7878 68.957 23.3164V2.67188ZM118.566 24.5078V14.7617C118.566 14.0456 118.443 13.4271 118.195 12.9062C117.948 12.3854 117.57 11.9818 117.062 11.6953C116.555 11.4089 115.91 11.2656 115.129 11.2656C114.439 11.2656 113.833 11.3828 113.312 11.6172C112.805 11.8516 112.414 12.1836 112.141 12.6133C111.867 13.0299 111.73 13.5117 111.73 14.0586H106.555C106.555 13.1862 106.763 12.3594 107.18 11.5781C107.596 10.7839 108.189 10.0807 108.957 9.46875C109.738 8.84375 110.669 8.35547 111.75 8.00391C112.844 7.65234 114.068 7.47656 115.422 7.47656C117.023 7.47656 118.449 7.75 119.699 8.29688C120.962 8.83073 121.952 9.63802 122.668 10.7188C123.397 11.7995 123.762 13.1602 123.762 14.8008V24.0195C123.762 25.0742 123.827 25.9792 123.957 26.7344C124.1 27.4766 124.309 28.1211 124.582 28.668V29H119.328C119.081 28.4661 118.892 27.7891 118.762 26.9688C118.632 26.1354 118.566 25.3151 118.566 24.5078ZM119.289 16.1289L119.328 19.1953H116.066C115.259 19.1953 114.549 19.2799 113.938 19.4492C113.326 19.6055 112.824 19.8398 112.434 20.1523C112.043 20.4518 111.75 20.8164 111.555 21.2461C111.359 21.6628 111.262 22.138 111.262 22.6719C111.262 23.1927 111.379 23.6615 111.613 24.0781C111.861 24.4948 112.212 24.8268 112.668 25.0742C113.137 25.3086 113.684 25.4258 114.309 25.4258C115.22 25.4258 116.014 25.2435 116.691 24.8789C117.368 24.5013 117.896 24.0456 118.273 23.5117C118.651 22.9779 118.853 22.4701 118.879 21.9883L120.363 24.2148C120.181 24.7487 119.908 25.3151 119.543 25.9141C119.178 26.513 118.71 27.0729 118.137 27.5938C117.564 28.1146 116.874 28.5443 116.066 28.8828C115.259 29.2214 114.322 29.3906 113.254 29.3906C111.887 29.3906 110.663 29.1172 109.582 28.5703C108.501 28.0234 107.648 27.2747 107.023 26.3242C106.398 25.3737 106.086 24.293 106.086 23.082C106.086 21.9622 106.294 20.9727 106.711 20.1133C107.128 19.2539 107.746 18.5312 108.566 17.9453C109.387 17.3464 110.402 16.8971 111.613 16.5977C112.837 16.2852 114.237 16.1289 115.812 16.1289H119.289ZM133.566 12.1836V29H128.41V7.86719H133.293L133.566 12.1836ZM139.992 7.73047L139.914 12.5352C139.628 12.4831 139.302 12.444 138.938 12.418C138.586 12.3919 138.254 12.3789 137.941 12.3789C137.147 12.3789 136.451 12.4896 135.852 12.7109C135.253 12.9193 134.751 13.2253 134.348 13.6289C133.957 14.0326 133.658 14.5273 133.449 15.1133C133.241 15.6862 133.124 16.3372 133.098 17.0664L131.984 16.9297C131.984 15.5885 132.121 14.3451 132.395 13.1992C132.668 12.0534 133.065 11.0508 133.586 10.1914C134.107 9.33203 134.758 8.66797 135.539 8.19922C136.333 7.71745 137.245 7.47656 138.273 7.47656C138.56 7.47656 138.866 7.5026 139.191 7.55469C139.53 7.59375 139.797 7.65234 139.992 7.73047ZM153.801 7.86719V11.5781H141.691V7.86719H153.801ZM144.934 2.67188H150.109V22.9062C150.109 23.5312 150.194 24.013 150.363 24.3516C150.533 24.6901 150.786 24.918 151.125 25.0352C151.464 25.1523 151.867 25.2109 152.336 25.2109C152.674 25.2109 152.987 25.1914 153.273 25.1523C153.56 25.1133 153.801 25.0742 153.996 25.0352L154.016 28.9023C153.586 29.0456 153.098 29.1628 152.551 29.2539C152.017 29.3451 151.411 29.3906 150.734 29.3906C149.576 29.3906 148.56 29.1953 147.688 28.8047C146.815 28.401 146.138 27.7565 145.656 26.8711C145.174 25.9727 144.934 24.7878 144.934 23.3164V2.67188ZM163.43 26.6562L169.094 7.86719H174.621L166.145 32.2031C165.949 32.724 165.695 33.2904 165.383 33.9023C165.083 34.5143 164.68 35.0938 164.172 35.6406C163.664 36.2005 163.026 36.6562 162.258 37.0078C161.503 37.3594 160.585 37.5352 159.504 37.5352C159.035 37.5352 158.618 37.5026 158.254 37.4375C157.889 37.3724 157.505 37.2878 157.102 37.1836V33.3164C157.232 33.3294 157.382 33.3359 157.551 33.3359C157.733 33.349 157.889 33.3555 158.02 33.3555C158.775 33.3555 159.4 33.2643 159.895 33.082C160.389 32.9128 160.786 32.6328 161.086 32.2422C161.398 31.8646 161.659 31.3698 161.867 30.7578L163.43 26.6562ZM160.637 7.86719L165.422 23.4336L166.262 28.8828L162.707 29.5273L155.07 7.86719H160.637Z"
      fill={isBlack ? "black" : "white"}
    />
    <path
      d="M92.5898 18.6289H85.2656V14.4102H92.5898C93.7878 14.4102 94.7578 14.2148 95.5 13.8242C96.2552 13.4206 96.8086 12.8737 97.1602 12.1836C97.5117 11.4805 97.6875 10.6797 97.6875 9.78125C97.6875 8.90885 97.5117 8.09505 97.1602 7.33984C96.8086 6.58464 96.2552 5.97266 95.5 5.50391C94.7578 5.03516 93.7878 4.80078 92.5898 4.80078H87.0234V29H81.6523V0.5625H92.5898C94.8034 0.5625 96.6914 0.959635 98.2539 1.75391C99.8294 2.53516 101.027 3.6224 101.848 5.01562C102.681 6.39583 103.098 7.97135 103.098 9.74219C103.098 11.5781 102.681 13.1602 101.848 14.4883C101.027 15.8164 99.8294 16.8385 98.2539 17.5547C96.6914 18.2708 94.8034 18.6289 92.5898 18.6289Z"
      fill="#E94F37"
    />
  </svg>
);

export default Logo;
