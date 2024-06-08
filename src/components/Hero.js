import { useEffect } from "react";
import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";

const Hero = ({ className = "" }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={[styles.hero, className].join(" ")}>
      <img className={styles.shapesIcon} alt="" src="/shapes.svg" />
      <div className={styles.heroInner}>
        <div className={styles.beTheFastestInDeliveryYouParent}>
          <h1 className={styles.beTheFastestContainer}>
            <span>{`Be The Fastest In Delivery Your `}</span>
            <span className={styles.food}>Food</span>
          </h1>
          <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
            <p className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet
            </p>
          </div>
          <div className={styles.instanceWrapper}>
            <button className={styles.instanceContainer}>
              <FrameComponent5
                claritysignInLine="/claritysigninline.svg"
                signIn="Get Started"
                showClaritysignInLineIcon={false}
                propPadding="var(--padding-2xs-6) var(--padding-2xl) var(--padding-2xs-5)"
                propDebugCommit="unset"
                propBorder="unset"
                propMinHeight="17px"
                propTextDecoration="unset"
                propMinWidth="80px"
                propFontFamily="Inter"
              />
            </button>
          </div>
        </div>
      </div>
      <img
        className={styles.imgHeroIcon}
        loading="lazy"
        alt=""
        src="/imghero.svg"
        data-animate-on-scroll
      />
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
