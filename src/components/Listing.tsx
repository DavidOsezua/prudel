import React from "react";
import styles from "./Listing.module.css";
import { listingImg } from "../assets";

const Listing = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img src={listingImg} />
      </div>
    </section>
  );
};

export default Listing;
