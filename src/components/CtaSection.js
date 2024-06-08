import PropTypes from "prop-types";
import styles from "./CtaSection.module.css";

const CtaSection = ({ className = "" }) => {
  return (
    <section className={[styles.ctaSection, className].join(" ")}>
      <div className={styles.ctaSectionChild} />
      <img className={styles.linesIcon} alt="" src="/lines-2.svg" />
      <div className={styles.letsDiscussYourProjectParent}>
        <h1 className={styles.letsDiscussYourContainer}>
          <p className={styles.letsDiscuss}>Let’s Discuss</p>
          <p className={styles.yourProject}>Your Project</p>
        </h1>
        <h1 className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut sed mauris
          ut id aliquet augue.
        </h1>
      </div>
      <div className={styles.ctaSectionInner}>
        <div className={styles.vectorParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/ellipse-11-1.svg"
          />
          <b className={styles.contact}>Contact</b>
        </div>
      </div>
    </section>
  );
};

CtaSection.propTypes = {
  className: PropTypes.string,
};

export default CtaSection;
