import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import styles from "./FrameComponent8.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.ctaWrapper, className].join(" ")}>
      <div className={styles.cta}>
        <img
          className={styles.unsplash2lwgq02dgl8Icon}
          loading="lazy"
          alt=""
          src="/unsplash2lwgq02dgl8@2x.png"
        />
        <h2 className={styles.joinOurMember}>
          Join our member and get discount up to 50%
        </h2>
        <div className={styles.ctaInner}>
          <div className={styles.instanceWrapper}>
            <FrameComponent5
              claritysignInLine="/claritysigninline2.svg"
              signIn="Sign Up"
              showClaritysignInLineIcon={false}
              propPadding="var(--padding-2xs-1) var(--padding-13xl) var(--padding-3xs)"
              propDebugCommit="unset"
              propBorder="none"
              propMinHeight="unset"
              propTextDecoration="unset"
              propMinWidth="57px"
              propFontFamily="'Readex Pro'"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
