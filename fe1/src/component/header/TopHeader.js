import * as React from "react";
import headerData from "../../../public/data/data.json";
import styles from "../../../styles/Topheader.module.css";

const TopHeader = () => {
  return (
    <div class={styles.background}>
      <div class="d-flex justify-content-around justify-content-md-between px-3 px-lg-5 px-md-5 px-sm-3 ">
        <div class="d-none d-sm-flex align-items-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            className="me-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="12"
              height="12"
              rx="6"
              fill="white"
              stroke="#00A862"
              stroke-width="2"
            />
            <path
              d="M11.0003 2.61632C10.9858 2.9633 10.7347 3.91405 10.6265 4.20828C10.2677 4.65774 9.30729 5.6923 9.20477 6.25387C9.10572 6.79592 9.37938 7.17169 9.55429 7.65586C9.5166 8.0916 9.40445 8.50634 9.52606 8.94593C9.61691 9.2742 9.78994 9.54173 9.92905 9.75647C9.98694 9.84617 10.0746 9.98128 10.0866 10.0141C10.1226 10.2862 9.40415 10.9995 8.85271 11C8.64988 10.6142 8.54751 10.3295 8.12781 10.1342C7.80195 9.98242 7.67405 10.0635 7.36867 9.9199C7.14012 9.48498 7.21394 9.21093 6.71318 8.90101C6.42423 8.72225 6.03875 8.68627 5.51053 8.68627C5.26037 8.68627 4.10631 8.72768 3.89085 8.6012C3.58534 8.35448 3.10442 7.48191 3.00032 7.06761C3.13376 6.79051 3.34401 6.65332 3.50048 6.28045C3.55111 6.15941 3.66468 5.60279 3.7131 5.54618C4.39148 5.45648 4.38357 5.92034 5.19447 5.34695C5.24763 5.30937 5.32807 5.25245 5.33217 5.24797C5.38706 5.24797 6.53199 5.39556 6.93008 5.39556C7.7938 5.39556 8.23638 4.99997 8.36224 4.4237C8.51239 3.73597 8.12565 2.61238 7.18878 2.61238C6.90456 2.61238 6.78185 2.67458 6.53942 2.72031C6.17382 2.57288 5.9145 2.40035 5.49324 2.40035C4.66029 2.40035 3.39359 3.17891 2.78853 3.71793C2.56645 3.63335 3.40147 2.36183 3.41093 2.11832C4.40019 1.41573 5.60251 1 6.90046 1C8.47931 1 9.91529 1.61585 11.0003 2.61632Z"
              fill="#00A862"
            />
          </svg>
          {headerData.mini_header_data.country_name} |{" "}
          {headerData.mini_header_data.language}
        </div>
        <div className={styles.heading + ""}>
          {headerData.mini_header_data.banner_data}
        </div>
        <div className="d-none d-sm-flex ">
          <div class="px-3 d-flex align-items-end">
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              className="me-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.00036 13.9986C5.00036 13.9986 10 9.99893 10 4.99964C9.99986 2.23844 7.7617 0 5.00036 0C2.23915 0 0 2.2383 0 4.99964C0 9.99893 5.00036 13.9986 5.00036 13.9986ZM3.00014 4.99964C3.00014 3.89555 3.89559 3.00011 4.99968 3.00011C6.10377 3.00011 6.99922 3.89555 6.99922 4.99964C6.99922 6.10373 6.10377 6.99918 4.99968 6.99918C3.89559 6.99904 3.00014 6.10444 3.00014 4.99964Z"
                fill="#00A862"
              />
            </svg>
            {headerData.mini_header_data.distributor_text}
          </div>
          <div className="d-flex align-items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person me-1"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                fill="#00A862"
              />
            </svg>

            {headerData.mini_header_data.sign_in}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
