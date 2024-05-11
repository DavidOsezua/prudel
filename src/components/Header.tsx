import React from "react";
import styles from "./Header.module.css";
import { logo } from "../assets";

const Header = (): React.JSX.Element => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.navContainer}`}>
        <div className={`${styles.logoContainer}`}>
          <img src={logo} className={`${styles.logo}`} />
          <h1 className={`${styles.logoTitle}`}>PUDEL</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
