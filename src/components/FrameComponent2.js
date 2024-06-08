import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.agencyLandingPageInner, className].join(" ")}>
      <div className={styles.unsplashrmilc1piwm0Parent}>
        <img
          className={styles.unsplashrmilc1piwm0Icon}
          loading="lazy"
          alt=""
          src="/unsplashrmilc1piwm0-3@2x.png"
        />
        <div className={styles.newsWebDesignParent}>
          <h1 className={styles.newsWebDesign}>News web design</h1>
          <h3 className={styles.webDesign}>Web Design</h3>
        </div>
        <div className={styles.navBtnWrapper}>
          <button className={styles.navBtn}>
            <a className={styles.viewAll}>View All</a>
            <div className={styles.navBtnInner}>
              <img className={styles.frameChild} alt="" src="/line-9.svg" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
