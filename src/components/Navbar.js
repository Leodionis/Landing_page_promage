import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const Navbar = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbarChild} />
      <div className={styles.frameParent}>
        <div className={styles.letsfoodWrapper}>
          <a className={styles.letsfood}>Let’sFood</a>
        </div>
        <img
          className={styles.food2Icon}
          loading="lazy"
          alt=""
          src="/food-2.svg"
        />
      </div>
      <div className={styles.navbarInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.homeParent}>
              <a className={styles.home}>Home</a>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.menuWrapper}>
            <a className={styles.menu}>Menu</a>
          </div>
          <div className={styles.howItWorksWrapper}>
            <a className={styles.howItWorks}>How it works</a>
          </div>
          <div className={styles.aboutWrapper}>
            <a className={styles.about}>About</a>
          </div>
          <div className={styles.contactWrapper}>
            <a className={styles.contact}>Contact</a>
          </div>
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.heroiconsSolidshoppingCartParent}>
              <img
                className={styles.heroiconsSolidshoppingCart}
                loading="lazy"
                alt=""
                src="/heroiconssolidshoppingcart.svg"
              />
              <div className={styles.wrapper}>
                <a className={styles.a}>2</a>
              </div>
            </div>
          </div>
          <FrameComponent5
            claritysignInLine="/claritysigninline.svg"
            signIn="Sign in"
            showClaritysignInLineIcon
          />
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
