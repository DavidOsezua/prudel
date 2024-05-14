import React from "react";
import styles from "./Instructions.module.css";

const Instructions = () => {
  return (
    <section className={styles.instructionSection}>
      <div className={styles.instructionContainer}>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            Airdrop Amount: <span>100,000,000,000</span> PUDEL
          </h1>
          <span className={styles.title}> ( $7,000,000 USD)</span>

          <p className={styles.text}>
            Only holders of this airdrop tokens will be to take part in it.
          </p>

          <div>
            <h1 className={styles.subtitle}>Who can participate:</h1>

            <ul className={styles.instructionList}>
              <li className={styles.text}>
                All wallets with over 10,000,000 this airdrop tokens are
                eligible to participate.
              </li>
              <li className={styles.text}>
                All wallets can only participate once.
              </li>
              <li className={styles.text}>
                The rewards range from between 10,000,000 to 100,000,000,000
                PUDEL
              </li>
              <li className={styles.subtitle}>How to participate:</li>
            </ul>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <p>
                Press the button «Connect wallet» to connect your Metamask
                wallet or TrustWallet.
              </p>
            </div>

            <div className={styles.card}>
              <p>Press the button «Calculate your rewards».</p>
            </div>

            <div className={styles.card}>
              <p>
                Your reward of between 10,000,000 to 100,000,000,000 PUDEL will
                be automatically sent to your wallet.
              </p>
            </div>
          </div>

          <h3 className={styles.subtitle}>
            Connect your wallet to calculate your rewards in the Airdrop
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Instructions;
