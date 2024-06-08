import CardProduct from "./CardProduct";
import PropTypes from "prop-types";
import styles from "./FrameComponent21.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.ourMenuWrapper}>
                <div className={styles.ourMenu}>Our menu</div>
              </div>
              <h2 className={styles.ourPopularMenu}>Our Popular Menu</h2>
            </div>
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </div>
        </div>
      </div>
      <div className={styles.cardProductParent}>
        <CardProduct
          unsplashG6wx5j5DR8="/unsplashg6wx5j5dr8@2x.png"
          mieRamen="Mie Ramen"
          topcoatlike="/topcoatlike.svg"
          rectangle10="/rectangle-10.svg"
        />
        <CardProduct
          unsplashG6wx5j5DR8="/unsplashzbonkjgfgko@2x.png"
          mieRamen="Salad Tahu"
          topcoatlike="/topcoatlike-1.svg"
          propBorderRadius="unset"
          propMinWidth="104px"
          rectangle10="/rectangle-10.svg"
          frameDivPadding="0px var(--padding-47xl)"
        />
        <CardProduct
          unsplashG6wx5j5DR8="/unsplashsqymtdqymjo@2x.png"
          mieRamen="Roti Bakar"
          topcoatlike="/topcoatlike-1.svg"
          propBorderRadius="unset"
          propMinWidth="101px"
          rectangle10="/rectangle-10.svg"
          frameDivPadding="0px var(--padding-48xl) 0px var(--padding-49xl)"
        />
        <div className={styles.cardProductWrapper}>
          <div className={styles.cardProduct}>
            <div className={styles.cardProductChild} />
            <div className={styles.unsplashvg2p2bk57byWrapper}>
              <img
                className={styles.unsplashvg2p2bk57byIcon}
                loading="lazy"
                alt=""
                src="/unsplashvg2p2bk57by@2x.png"
              />
            </div>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-10.svg"
              />
              <div className={styles.spaghettiWrapper}>
                <div className={styles.spaghetti}>Spaghetti</div>
              </div>
              <div className={styles.loremIpsumWrapper}>
                <div className={styles.loremIpsum}>lorem ipsum</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>$ 20.2</div>
                <img
                  className={styles.topcoatlikeIcon}
                  alt=""
                  src="/topcoatlike-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
