import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.agencyLandingPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.someStatisticsWrapper}>
          <h1 className={styles.someStatistics}>Some Statistics</h1>
        </div>
        <div className={styles.statistics}>
          <div className={styles.stats}>
            <div className={styles.wrapper}>
              <b className={styles.b}>
                <span>250</span>
                <span className={styles.span}>+</span>
              </b>
            </div>
            <h1 className={styles.projectCompleted}>Project Completed</h1>
          </div>
          <div className={styles.stats1}>
            <b className={styles.b1}>
              <span>150</span>
              <span className={styles.span1}>+</span>
            </b>
            <div className={styles.happyClientsWrapper}>
              <h1 className={styles.happyClients}>Happy Clients</h1>
            </div>
          </div>
          <div className={styles.stats2}>
            <div className={styles.container}>
              <b className={styles.b2}>
                <span>10</span>
                <span className={styles.span2}>+</span>
              </b>
            </div>
            <h1 className={styles.yearsOfExperience}>Years of Experience</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
