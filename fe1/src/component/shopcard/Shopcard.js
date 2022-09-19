import shop from "../../../public/GettyImages-1314742668 3shop.png";
import Image from "next/image";
import { useState } from "react";
import data from "../../../public/data/data.json";
import * as React from "react";
import styles from "../../../styles/shopcard.module.css";

const ShopCard = () => {
  const [selectedLevel, setSelectedLevel] = useState(
    data.shop_panel_data[0].data
  );
  const [selectedOption, setSelectedOption] = useState(
    data.shop_panel_data[0].filed
  );

  const handleClick = (ev, index) => {
    if (index === 2) {
      return;
    } else {
      setSelectedLevel(data.shop_panel_data[index].data);
      setSelectedOption(ev.target.innerText);
    }
  };

  return (
    <>
      <div className={styles.shopcardWrapper}>
        <div className="row">
          <div className="col-sm">
            {data.shop_panel_data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={
                    selectedOption === item.filed
                      ? "block p-4 pl-16 text-5xl font-bold  text-emerald-900 "
                      : "block p-4 pl-16 text-5xl font-bold text-green-600"
                  }
                  onClick={(ev) => handleClick(ev, index)}
                >
                  {selectedOption === item.filed
                    ? "-" + item.filed
                    : item.filed}
                </button>
              );
            })}
          </div>
          <div className="col-sm">
            <div className="text-xl font-normal ... ">
              {selectedLevel &&
                selectedLevel.length !== 0 &&
                selectedLevel.map((item, index) => {
                  return (
                    <div key={index} className="p-2 ">
                      {item}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-sm">
            <Image src={shop} />
          </div>
        </div>
        <div className={styles.allproductWrapper}>
          <span tabIndex={0}>
            shop all Product
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={styles.shopProductlink + " bi bi-chevron-right"}
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};
export default ShopCard;
