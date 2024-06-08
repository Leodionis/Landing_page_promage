import PropTypes from "prop-types";
import styles from "./Item1.module.css";

const Item1 = ({ className = "" }) => {
  return (
    <div className={[styles.item, className].join(" ")}>
      <div className={styles.itemChild} />
      <img
        className={styles.itemItem}
        loading="lazy"
        alt=""
        src="/rectangle-347@2x.png"
      />
      <div className={styles.howToCreateAwesomeMeshGraParent}>
        <h1 className={styles.howToCreate}>
          How to create awesome mesh gradients
        </h1>
        <div className={styles.frameChild} />
        <div className={styles.readMoreParent}>
          <b className={styles.readMore}>Read More</b>
          <div className={styles.july2022Wrapper}>
            <div className={styles.july2022}>19 July 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Item1.propTypes = {
  className: PropTypes.string,
};

export default Item1;
