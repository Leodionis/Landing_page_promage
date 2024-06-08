import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent51.module.css";

const FrameComponent5 = ({
  className = "",
  claritysignInLine,
  signIn,
  showClaritysignInLineIcon,
  propPadding,
  propDebugCommit,
  propBorder,
  propMinHeight,
  propTextDecoration,
  propMinWidth,
  propFontFamily,
}) => {
  const frameButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
      debugCommit: propDebugCommit,
      border: propBorder,
    };
  }, [propPadding, propDebugCommit, propBorder]);

  const claritysignInLineIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const signInStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      minWidth: propMinWidth,
      fontFamily: propFontFamily,
    };
  }, [propTextDecoration, propMinWidth, propFontFamily]);

  return (
    <button
      className={[styles.claritysignInLineParent, className].join(" ")}
      style={frameButtonStyle}
    >
      {showClaritysignInLineIcon && (
        <img
          className={styles.claritysignInLineIcon}
          alt=""
          src={claritysignInLine}
          style={claritysignInLineIconStyle}
        />
      )}
      <a className={styles.signIn} style={signInStyle}>
        {signIn}
      </a>
    </button>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  claritysignInLine: PropTypes.string,
  signIn: PropTypes.string,
  showClaritysignInLineIcon: PropTypes.bool,

  /** Style props */
  propPadding: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propBorder: PropTypes.any,
  propMinHeight: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFontFamily: PropTypes.any,
};

export default FrameComponent5;
