import * as React from "react";
import headerData from "../../../public/data/data.json";
import styles from "../../../styles/Topheader.module.css";
import iconglobe from "../../../public/iconglobe.png";
import disticonmap from "../../../public/dist iconmap.png";
import iconaccount from "../../../public/iconaccount.png";
import Image from "next/image";

const TopHeader = () => {
  return (
    <div className={styles.background}>
      <div className="d-flex justify-content-around justify-content-md-between px-3 px-lg-5 px-md-5 px-sm-3 ">
        <div className="d-none d-sm-flex align-items-center" tabIndex={0}>
        <Image
              src={iconglobe}
              alt={"location"}
              height={10}
              width ={10}
            />
          {headerData.mini_header_data.country_name} |{" "}
          {headerData.mini_header_data.language}
        </div>
        <div className={styles.heading + ""}>
          {headerData.mini_header_data.banner_data}
        </div>
        <div className="d-none d-sm-flex " >
          <div className="px-3 d-flex align-items-end" tabIndex={0}>
          <Image
              src={disticonmap}
              alt={headerData.mini_header_data.distributor_text}
              height={10}
              width ={8}
            />
            {headerData.mini_header_data.distributor_text}
          </div>
          <div className="d-flex align-items-end" tabIndex={0}>
          <Image
              src={iconaccount}
              alt={headerData.mini_header_data.distributor_text}
              height={10}
              width ={8}
            />

            {headerData.mini_header_data.sign_in}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
