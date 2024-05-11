import React from "react";
import styles from "./Footer.module.css";
import { backToTop } from "../assets";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.backToTopContainer}>
          <div className={styles.line}></div>

          <img src={backToTop} className="cursor-pointer" />
        </div>

        <p className={styles.text}>© 2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
