import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CardProduct.module.css";

const CardProduct = ({
  className = "",
  unsplashG6wx5j5DR8,
  mieRamen,
  topcoatlike,
  propBorderRadius,
  propMinWidth,
  rectangle10,
  frameDivPadding,
}) => {
  const unsplashG6wx5j5DR8IconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const mieRamenStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div className={[styles.cardProduct, className].join(" ")}>
      <div className={styles.cardProductChild} />
      <div className={styles.unsplashg6wx5j5Dr8Wrapper}>
        <img
          className={styles.unsplashg6wx5j5Dr8Icon}
          loading="lazy"
          alt=""
          src={unsplashG6wx5j5DR8}
          style={unsplashG6wx5j5DR8IconStyle}
        />
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src={rectangle10} />
        <div className={styles.mieRamenWrapper} style={frameDiv2Style}>
          <div className={styles.mieRamen} style={mieRamenStyle}>
            {mieRamen}
          </div>
        </div>
        <div className={styles.loremIpsumWrapper}>
          <div className={styles.loremIpsum}>lorem ipsum</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>$ 20.2</div>
          <img
            className={styles.topcoatlikeIcon}
            loading="lazy"
            alt=""
            src={topcoatlike}
          />
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  className: PropTypes.string,
  unsplashG6wx5j5DR8: PropTypes.string,
  mieRamen: PropTypes.string,
  topcoatlike: PropTypes.string,
  rectangle10: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propMinWidth: PropTypes.any,
  frameDivPadding: PropTypes.any,
};

export default CardProduct;
