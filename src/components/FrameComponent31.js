import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import styles from "./FrameComponent31.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.desktopDesignInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.howItWorksWrapper}>
                  <div className={styles.howItWorks}>How it works</div>
                </div>
                <h2 className={styles.whatWeServe}>What We Serve</h2>
              </div>
            </div>
            <div className={styles.productQualityIs}>
              Product Quality Is Our Priority, And Always Guarantees Halal And
              Safety Until It Is In Your Hands.
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <FrameComponent4
            order1="/order-1@2x.png"
            easyToOrder="Easy To Order"
            youOnlyOrderThroughTheApp="You only order through the app"
          />
          <FrameComponent4
            order1="/delivery-1@2x.png"
            easyToOrder="Fastest Delivery"
            youOnlyOrderThroughTheApp="Delivery will be on time"
            propPadding="0px var(--padding-13xl) 0px var(--padding-10xl)"
            propAlignSelf="stretch"
            propPadding1="0px var(--padding-2xs) 0px var(--padding-3xs)"
          />
          <div className={styles.frameParent2}>
            <div className={styles.courier1Wrapper}>
              <img
                className={styles.courier1Icon}
                loading="lazy"
                alt=""
                src="/courier-1@2x.png"
              />
            </div>
            <h3 className={styles.bestQuality}>Best Quality</h3>
            <div className={styles.theBestQuality}>
              The best quality of food for you
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
