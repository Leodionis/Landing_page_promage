import PropTypes from "prop-types";
import styles from "./AkarIconstwitterFill.module.css";

const AkarIconstwitterFill = ({ className = "" }) => {
  return (
    <div className={[styles.akarIconstwitterFill, className].join(" ")}>
      <img className={styles.groupIcon} alt="" src="/group-2.svg" />
    </div>
  );
};

AkarIconstwitterFill.propTypes = {
  className: PropTypes.string,
};

export default AkarIconstwitterFill;
