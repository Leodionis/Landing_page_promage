import PropTypes from "prop-types";
import styles from "./AkarIconsinstagramFill.module.css";

const AkarIconsinstagramFill = ({ className = "" }) => {
  return (
    <div className={[styles.akarIconsinstagramFill, className].join(" ")}>
      <img className={styles.groupIcon} alt="" src="/group-1.svg" />
    </div>
  );
};

AkarIconsinstagramFill.propTypes = {
  className: PropTypes.string,
};

export default AkarIconsinstagramFill;
