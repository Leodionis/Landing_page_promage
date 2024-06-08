import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.agencyLandingPageInner, className].join(" ")}>
      <div className={styles.designDrivenDevelopmentOfYParent}>
        <h1 className={styles.designDrivenDevelopmentOfContainer}>
          <span>{`Design-driven development of your `}</span>
          <span className={styles.webProduct}>web product</span>
        </h1>
        <div className={styles.frameParent}>
          <div className={styles.aFullCycleDigitalServiceAWrapper}>
            <p className={styles.aFullCycleDigital}>
              A full-cycle digital service agency. We do from design to
              end-to-end development to maintenance. We have been worked with
              more than 50+ brands
            </p>
          </div>
          <div className={styles.eParent}>
            <div className={styles.e}>E</div>
            <div className={styles.x}>x</div>
            <div className={styles.pParent}>
              <div className={styles.p}>p</div>
              <div className={styles.l}>l</div>
            </div>
            <div className={styles.o}>o</div>
            <div className={styles.r}>r</div>
            <div className={styles.e1}>e</div>
            <div className={styles.div}> </div>
            <div className={styles.n}>N</div>
            <div className={styles.o1}>o</div>
            <div className={styles.w}>w</div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.ellipseGroup}>
                <div className={styles.frameItem} />
                <img
                  className={styles.akarIconsarrowDown}
                  loading="lazy"
                  alt=""
                  src="/akariconsarrowdown.svg"
                />
              </div>
              <img
                className={styles.exploreIcon}
                alt=""
                src="/explore@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
