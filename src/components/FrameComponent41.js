import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent41.module.css";

const FrameComponent4 = ({
  className = "",
  order1,
  easyToOrder,
  youOnlyOrderThroughTheApp,
  propPadding,
  propAlignSelf,
  propPadding1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.order1Wrapper} style={frameDivStyle}>
        <img className={styles.order1Icon} loading="lazy" alt="" src={order1} />
      </div>
      <h3 className={styles.easyToOrder}>{easyToOrder}</h3>
      <div
        className={styles.youOnlyOrderThroughTheAppWrapper}
        style={frameDiv1Style}
      >
        <div className={styles.youOnlyOrder}>{youOnlyOrderThroughTheApp}</div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  order1: PropTypes.string,
  easyToOrder: PropTypes.string,
  youOnlyOrderThroughTheApp: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default FrameComponent4;
