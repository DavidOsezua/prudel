import React from "react";
import styles from "./Anouncement.module.css";
import { Fade, Slide } from "react-awesome-reveal";

const Anouncement = () => {
  return (
    //This is the announcement section
    <section className={`${styles.anouncementSection}`}>
      {/************** The announcement Container   ******************/}
      <div className={`${styles.anouncementContainer}`}>
        <Slide>
          <h1 className={`${styles.title}`}>
            The biggest official Airdrop by The Open Network (PUDEL) Team has
            begun!
          </h1>
        </Slide>

        <Fade>
          <p className={`${styles.text}`}>
            To maximize the popularity of our project and to attract new
            holders, our team is launching the biggest PUDEL airdrop yet.
          </p>
        </Fade>

        {/****************   **********************/}

        <Slide direction="right">
          <div className={styles.tokenEligibility}>
            <p className={styles.text}>
              Every participant who receives tokens is eligible to have between 
            </p>

            <p className="text-[#FA9344] font-bold">
              <span>10,000,000</span> to <span>100,000,000,000</span> PUDEL
            </p>

            <p className={styles.text}>
              deposited into their wallet! The open network will swap & bridge
              any available token into PUDEL on the BNB smart chain.
            </p>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Anouncement;
