import * as React from "react";
import data from "../../../public/data/data.json";
const TopHeader = () => {

  return (
    <div className="container">
      <div className="row justify-content-md-center"></div>
      <div className="row">
        <div className="col">{data.mini_header_data.country_name} | {data.mini_header_data.language}</div>
        <div className="col">{data.mini_header_data.banner_data}</div>
        <div className="col-md-auto">{data.mini_header_data.distributor_text}</div>
        <div className="col-md-auto">{data.mini_header_data.sign_in}</div>
      </div>
    </div>
  );
};
export default TopHeader;
