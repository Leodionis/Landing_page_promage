import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Item1 from "../components/Item1";
import Item from "../components/Item";
import CtaSection from "../components/CtaSection";
import FrameComponent from "../components/FrameComponent";
import styles from "./AgencyLandingPage.module.css";

const AgencyLandingPage = () => {
  return (
    <div className={styles.agencyLandingPage}>
      <section className={styles.linesParent}>
        <img className={styles.linesIcon} alt="" src="/lines.svg" />
        <div className={styles.vectorParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/ellipse-11.svg"
          />
          <b className={styles.view}>View</b>
        </div>
      </section>
      <FrameComponent7 />
      <FrameComponent6 />
      <section className={styles.linesGroup}>
        <img className={styles.linesIcon1} alt="" src="/lines-1.svg" />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/ellipse-10.svg"
        />
      </section>
      <section className={styles.unsplashrmilc1piwm0Wrapper}>
        <img
          className={styles.unsplashrmilc1piwm0Icon}
          alt=""
          src="/unsplashrmilc1piwm0@2x.png"
        />
      </section>
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <section className={styles.agencyLandingPageInner}>
        <div className={styles.unsplashrmilc1piwm0Parent}>
          <img
            className={styles.unsplashrmilc1piwm0Icon1}
            loading="lazy"
            alt=""
            src="/unsplashrmilc1piwm0-2@2x.png"
          />
          <div className={styles.marketerWebDesignParent}>
            <h1 className={styles.marketerWebDesign}>Marketer web design</h1>
            <h3 className={styles.webDesign}>Web Design</h3>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <section className={styles.blogSection}>
        <div className={styles.blogSectionChild} />
        <FrameComponent1 />
        <div className={styles.itemParent}>
          <Item1 />
          <Item />
        </div>
      </section>
      <CtaSection />
      <FrameComponent />
    </div>
  );
};

export default AgencyLandingPage;
