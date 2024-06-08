import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <p className={styles.copyright2022}>
        Copyright © 2022 Kartik Bansal . All Rights Reseved.
      </p>
      <div className={styles.frameWrapper}>
        <div className={styles.linkedinParent}>
          <img
            className={styles.linkedinIcon}
            loading="lazy"
            alt=""
            src="/052linkedin.svg"
          />
          <img
            className={styles.messengerIcon}
            loading="lazy"
            alt=""
            src="/025messenger.svg"
          />
          <img
            className={styles.twitterIcon}
            loading="lazy"
            alt=""
            src="/096twitter.svg"
          />
          <img
            className={styles.twooIcon}
            loading="lazy"
            alt=""
            src="/097twoo.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
