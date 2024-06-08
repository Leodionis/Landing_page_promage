import AkarIconsinstagramFill from "./AkarIconsinstagramFill";
import AkarIconstwitterFill from "./AkarIconstwitterFill";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <img className={styles.bgImageIcon} alt="" src="/bgimage.svg" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.letsfoodWrapper}>
              <div className={styles.letsfood}>Let’sFood</div>
            </div>
            <img className={styles.food2Icon} alt="" src="/food-2.svg" />
          </div>
          <div className={styles.jalanSemangkaRayaTelagaMuParent}>
            <p className={styles.jalanSemangkaRaya}>
              Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi
            </p>
            <div className={styles.akarIconsinstagramFillParent}>
              <AkarIconsinstagramFill />
              <div className={styles.bxbxlFacebook}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <AkarIconstwitterFill />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.companyParent}>
            <div className={styles.company}>Company</div>
            <div className={styles.aboutUsParent}>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.career}>Career</div>
              <div className={styles.howItWork}>How It Work</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.policyParent}>
            <div className={styles.policy}>Policy</div>
            <div className={styles.faqParent}>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.privacy}>Privacy</div>
              <div className={styles.shipping}>Shipping</div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.getInTouchParent}>
            <div className={styles.getInTouch}>Get In Touch</div>
            <div className={styles.parent}>
              <div className={styles.div}>+62 896 7311 2766</div>
              <div className={styles.foodexamplecom}>food@example.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.letsfoodAllRightReservedWrapper}>
          <div className={styles.letsfoodAllRight}>
            © 2022 Let’sFood. ALL RIGHT RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
