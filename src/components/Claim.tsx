import styles from "./Claim.module.css";
import { loading, logo } from "../assets";
import { Fade } from "react-awesome-reveal";

const Claim = () => {
  return (
    <section className={`${styles.claimSection}`}>
      <div className={`${styles.claimContainer}`}>
        <Fade triggerOnce={true}>
          <div className={`${styles.border}`}>
            <img src={loading} />
            <img src={logo} className={styles.logo} />

            <p>Remaining PUDEL:</p>

            <p className="mt-0">8,463,326,000/100,000,000,000</p>

            <button className={styles.btn}>Claim Rewards</button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Claim;
