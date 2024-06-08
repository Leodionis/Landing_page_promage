import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.blogSectionInner, className].join(" ")}>
      <div className={styles.ourLatestArticlesResourceParent}>
        <h1
          className={styles.ourLatestArticles}
        >{`Our latest articles & resources`}</h1>
        <div className={styles.navBtnWrapper}>
          <button className={styles.navBtn}>
            <div className={styles.browseAll}>Browse All</div>
            <div className={styles.navBtnInner}>
              <img className={styles.frameChild} alt="" src="/line-9.svg" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
