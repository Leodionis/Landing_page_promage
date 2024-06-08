import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={[styles.agencyLandingPageInner, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.studioWrapper}>
          <a className={styles.studio}>Studio</a>
        </div>
        <nav className={styles.frameWrapper}>
          <nav className={styles.homeParent}>
            <a className={styles.home}>Home</a>
            <a className={styles.services}>Services</a>
            <a className={styles.portfolio}>Portfolio</a>
            <a className={styles.aboutUs}>About Us</a>
            <a className={styles.blog}>Blog</a>
          </nav>
        </nav>
        <button className={styles.navBtn}>
          <a className={styles.startAProject}>Start a Project</a>
        </button>
      </header>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
