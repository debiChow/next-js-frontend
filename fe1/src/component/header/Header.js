import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../../styles/Header.module.css";
import logo from "../../../public/logo.png";
import vector from "../../../public/Vector.png";
import vectorDown from "../../../public/Vectorvector1.png";
import Image from "next/image";
import TopHeader from "./TopHeader";
import data from "../../../public/data/data.json";
import ShopCard from "../shopcard/Shopcard";
import { useState } from "react";
const Header = () => {
  const [showShopPanel, setShowShopPanel] = useState(false);
  const handleClick = () => {
    setShowShopPanel(!showShopPanel);
  };
  return (
    <>
      <TopHeader />
      <Navbar bg="light" expand="lg" className={styles.navbar}>
        <div className="col">
          <Navbar.Brand href="/home" className={styles.logo}>
            <Image
              src={logo}
              alt={data.main_header_data.alt}
              height={90}
              width={90}
            />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="col">
            <Nav className={"me-auto " + styles.sideNavoptions}>
              {data.main_header_data.navOptions.map((item, index) => {
                return (
                  <div key ={index}className={styles.navOptions}>
                    <Nav.Link className={styles.linkNav}>
                      {!item.isdropdown && <span>{item.value}</span>}
                      {item.isdropdown && (
                        <span onClick={handleClick}>
                          {item.value}
                          {
                            showShopPanel &&
                            <Image src={vectorDown} />
                          }
                          {
                            !showShopPanel &&
                            <Image src={vector} />
                          }
                         
                        </span>
                      )}
                    </Nav.Link>
                  </div>
                );
              })}
            </Nav>
          </div>
          <div className={styles.navOptions}>
            <Nav.Link href="#home" className={styles.linkNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Nav.Link>
          </div>

          <div className={styles.navOptions}>
            <Nav.Link href="#home" className={styles.linkNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
      {showShopPanel && <ShopCard />}
    </>
  );
};

export default Header;
