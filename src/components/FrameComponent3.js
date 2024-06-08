import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.agencyLandingPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.selectedProjectsWrapper}>
          <b className={styles.selectedProjects}>
            <p className={styles.selected}>Selected</p>
            <p className={styles.projects}>projects</p>
          </b>
        </div>
        <img
          className={styles.unsplashrmilc1piwm0Icon}
          alt=""
          src="/unsplashrmilc1piwm0-1@2x.png"
        />
        <div className={styles.cicuWebDesignParent}>
          <h1 className={styles.cicuWebDesign}>cicu web design</h1>
          <h3 className={styles.webDesign}>Web Design</h3>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
