import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./DesktopDesign.module.css";

const DesktopDesign = () => {
  return (
    <div className={styles.desktopDesign}>
      <section className={styles.navbarParent}>
        <Navbar />
        <Hero />
      </section>
      <FrameComponent3 />
      <section className={styles.frameParent}>
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
      </section>
      <Footer />
    </div>
  );
};

export default DesktopDesign;
