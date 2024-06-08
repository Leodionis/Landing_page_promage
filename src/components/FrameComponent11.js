import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import styles from "./FrameComponent11.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.instanceWrapper}>
          <FrameComponent5
            claritysignInLine="/claritysigninline1.svg"
            signIn="More Menu"
            showClaritysignInLineIcon={false}
            propPadding="var(--padding-2xs-8) var(--padding-9xl)"
            propDebugCommit="unset"
            propBorder="none"
            propMinHeight="unset"
            propTextDecoration="unset"
            propMinWidth="79px"
            propFontFamily="'Readex Pro'"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.wrapperUnsplashYhswy6uqvkParent}>
            <div className={styles.wrapperUnsplashYhswy6uqvk}>
              <img
                className={styles.unsplashYhswy6uqvkIcon}
                loading="lazy"
                alt=""
                src="/unsplashyhswy6uqvk@2x.png"
              />
            </div>
            <div className={styles.wrapperUnsplashmgfpfwszfgmParent}>
              <div className={styles.wrapperUnsplashmgfpfwszfgm}>
                <img
                  className={styles.unsplashmgfpfwszfgmIcon}
                  loading="lazy"
                  alt=""
                  src="/unsplashmgfpfwszfgm@2x.png"
                />
              </div>
              <div className={styles.wrapperUnsplashk63facpd8gg}>
                <img
                  className={styles.unsplashk63facpd8ggIcon}
                  loading="lazy"
                  alt=""
                  src="/unsplashk63facpd8gg@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.whatTheSayParent}>
                  <div className={styles.whatTheSay}>What the say</div>
                  <h2 className={styles.whatOurCustomers}>
                    What Our Customers Say About Us
                  </h2>
                </div>
                <div className={styles.cardTestiParent}>
                  <div className={styles.cardTesti}>
                    <div className={styles.cardTestiChild} />
                    <div className={styles.unsplashxbe20zDldsParent}>
                      <img
                        className={styles.unsplashxbe20zDldsIcon}
                        loading="lazy"
                        alt=""
                        src="/unsplashxbe20z-dlds@2x.png"
                      />
                      <div className={styles.frameWrapper1}>
                        <div className={styles.frameParent2}>
                          <div className={styles.nauraSilvanaWrapper}>
                            <div className={styles.nauraSilvana}>
                              Naura Silvana
                            </div>
                          </div>
                          <div className={styles.antDesignstarFilledParent}>
                            <img
                              className={styles.antDesignstarFilledIcon}
                              loading="lazy"
                              alt=""
                              src="/antdesignstarfilled.svg"
                            />
                            <img
                              className={styles.antDesignstarFilledIcon1}
                              alt=""
                              src="/antdesignstarfilled.svg"
                            />
                            <img
                              className={styles.antDesignstarFilledIcon2}
                              alt=""
                              src="/antdesignstarfilled.svg"
                            />
                            <img
                              className={styles.antDesignstarFilledIcon3}
                              alt=""
                              src="/antdesignstarfilled.svg"
                            />
                            <img
                              className={styles.bxbxsStarHalfIcon}
                              alt=""
                              src="/bxbxsstarhalf.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <blockquote className={styles.loremIpsumDolor}>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ut aliquam, purus sit amet luctus venenatis.”
                    </blockquote>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.frameParent4}>
                        <div className={styles.azuraWrapper}>
                          <div className={styles.azura}>Azura</div>
                        </div>
                        <div className={styles.antDesignstarFilledGroup}>
                          <img
                            className={styles.antDesignstarFilledIcon4}
                            alt=""
                            src="/antdesignstarfilled.svg"
                          />
                          <img
                            className={styles.antDesignstarFilledIcon5}
                            alt=""
                            src="/antdesignstarfilled.svg"
                          />
                          <img
                            className={styles.antDesignstarFilledIcon6}
                            alt=""
                            src="/antdesignstarfilled.svg"
                          />
                          <img
                            className={styles.antDesignstarFilledIcon7}
                            alt=""
                            src="/antdesignstarfilled.svg"
                          />
                          <img
                            className={styles.bxbxsStarHalfIcon1}
                            alt=""
                            src="/bxbxsstarhalf.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <blockquote className={styles.loremIpsumDolor1}>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      ut aliquam, purus sit amet luctus venenatis.”
                    </blockquote>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <img
                        className={styles.unsplashxbe20zDldsIcon1}
                        alt=""
                        src="/unsplashxbe20z-dlds-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
