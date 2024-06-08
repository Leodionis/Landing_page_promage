import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({ className = "" }) => {
  return (
    <div className={[styles.item, className].join(" ")}>
      <div className={styles.itemChild} />
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-349@2x.png"
        />
        <h1 className={styles.amazingAndFree}>
          10 Amazing and free to use google fonts
        </h1>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.frameItem} />
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

Item.propTypes = {
  className: PropTypes.string,
};

export default Item;
