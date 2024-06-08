import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.servicesSectionWrapper, className].join(" ")}>
      <div className={styles.servicesSection}>
        <div className={styles.servicesSectionChild} />
        <div className={styles.servicesSectionInner}>
          <div className={styles.weGiveSolutionHappinessParent}>
            <h1
              className={styles.weGiveSolution}
            >{`We Give Solution & Happiness`}</h1>
            <button className={styles.navBtn}>
              <div className={styles.startAProject}>Start a Project</div>
            </button>
          </div>
        </div>
        <div className={styles.servicesWrapper}>
          <div className={styles.serviceParent}>
            <div className={styles.service}>
              <div className={styles.serviceChild} />
              <img
                className={styles.serviceIcon}
                loading="lazy"
                alt=""
                src="/service-icon.svg"
              />
              <div className={styles.webDevelopmentParent}>
                <h1 className={styles.webDevelopment}>Web Development</h1>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
              </div>
            </div>
            <div className={styles.service1}>
              <div className={styles.serviceItem} />
              <img
                className={styles.serviceIcon1}
                loading="lazy"
                alt=""
                src="/service-icon-1.svg"
              />
              <div className={styles.uiuxDesignParent}>
                <b className={styles.uiuxDesign}>UI/UX Design</b>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
              </div>
            </div>
          </div>
          <div className={styles.serviceGroup}>
            <div className={styles.service2}>
              <div className={styles.serviceInner} />
              <img
                className={styles.serviceIcon2}
                loading="lazy"
                alt=""
                src="/service-icon-2.svg"
              />
              <div className={styles.brandingParent}>
                <b className={styles.branding}>Branding</b>
                <p className={styles.loremIpsumDolor2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
              </div>
            </div>
            <div className={styles.service3}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.serviceIcon3}
                loading="lazy"
                alt=""
                src="/service-icon.svg"
              />
              <div className={styles.contentWritingParent}>
                <b className={styles.contentWriting}>Content Writing</b>
                <p className={styles.loremIpsumDolor3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
