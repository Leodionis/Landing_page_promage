import styles from "./SaasLndingPage.module.css";

const SaasLndingPage = () => {
  return (
    <div className={styles.saasLndingPage}>
      <section className={styles.main}>
        <div className={styles.pageContentParent}>
          <div className={styles.pageContent}>
            <div className={styles.header}>
              <div className={styles.heroImage} />
              <div className={styles.titleWrapper}>
                <b className={styles.promage}>Promage</b>
              </div>
              <div className={styles.sloganContainer}>
                <div className={styles.menuContainer}>
                  <div className={styles.products}>Products</div>
                  <div className={styles.pricing}>Pricing</div>
                  <div className={styles.developers}>Developers</div>
                  <div className={styles.company}>Company</div>
                </div>
              </div>
              <div className={styles.auth}>
                <button className={styles.userActionButtons}>
                  <b className={styles.signUp}>Sign Up</b>
                </button>
                <button className={styles.userActionButtons1}>
                  <b className={styles.login}>Login</b>
                </button>
                <img className={styles.menu1Icon} alt="" src="/menu-1@2x.png" />
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.productivityDescriptionWrapper}>
                <div className={styles.productivityDescription}>
                  <h1 className={styles.oneAppTo}>
                    One App to Manage Your Tasks, Projects and Business.
                  </h1>
                  <div className={styles.productivitySubtitle}>
                    <div className={styles.manageAllYour}>
                      Manage all your tasks and projects and get real time
                      insight on performance and time management in a single
                      app. Enjoy maximum productivity with Promage.
                    </div>
                    <button className={styles.buttonLarge}>
                      <div className={styles.primaryButton}>
                        Get Started for Free
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <img
                className={styles.bodyChild}
                loading="lazy"
                alt=""
                src="/frame-1000000797.svg"
              />
            </div>
          </div>
          <header className={styles.frameChild} />
        </div>
      </section>
      <section className={styles.features}>
        <div className={styles.teamsContentParent}>
          <div className={styles.teamsContent}>
            <div className={styles.beAmongThe}>
              BE AMONG THE 1% MOST PRODUCTIVE TEAMS IN THE WORLD
            </div>
          </div>
          <div className={styles.teamImages}>
            <img
              className={styles.teamImagePlaceholders}
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <img
              className={styles.teamImagePlaceholders1}
              alt=""
              src="/frame-1.svg"
            />
            <img
              className={styles.teamImagePlaceholders2}
              alt=""
              src="/frame-2.svg"
            />
            <img className={styles.emptyTeamImage} alt="" src="/frame-3.svg" />
          </div>
        </div>
      </section>
      <section className={styles.maximizeContentWrapper}>
        <div className={styles.maximizeContent}>
          <div className={styles.maximizeDescription}>
            <b className={styles.maximiseProductivity}>MAXIMISE PRODUCTIVITY</b>
            <div className={styles.maximizeSubtitle}>
              <div className={styles.getWorkDoneSimplerFasteParent}>
                <h1
                  className={styles.getWorkDone}
                >{`Get Work Done, Simpler & Faster`}</h1>
                <div className={styles.withProjectManagement}>
                  With project management that adapts to the demands of your
                  team, you can schedule, monitor, and oversee any kind of work.
                </div>
              </div>
              <button className={styles.buttonLarge1}>
                <b className={styles.primaryButton1}>Get Started</b>
              </button>
            </div>
          </div>
          <div className={styles.dashboardImage}>
            <div className={styles.imagePlaceholder} />
            <div className={styles.wrapperDashboard1}>
              <img
                className={styles.dashboard1Icon}
                loading="lazy"
                alt=""
                src="/dashboard-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <img className={styles.saasLndingPageChild} alt="" />
      <section className={styles.thePlatformsPlatformParent}>
        <b className={styles.thePlatformsPlatformContainer}>
          <p className={styles.thePlatformsPlatform}>THE PLATFORM’S PLATFORM</p>
        </b>
        <div className={styles.platformContent}>
          <div className={styles.integrations}>
            <div className={styles.integrationsDescription}>
              <div className={styles.bringAllOfYourToolsIntoOParent}>
                <h1 className={styles.bringAllOf}>
                  Bring all of your tools into one place
                </h1>
                <div className={styles.promageCanIntegrate}>
                  Promage can integrate with your existing tools via native and
                  third-party integrations if you're not ready to replace all of
                  them just yet. To keep everything in one place, sync your
                  team's calendars, chat services, cloud storage, and more.
                </div>
              </div>
              <div className={styles.importOptionsParent}>
                <div className={styles.importOptions}>
                  <div className={styles.importImage} />
                  <div className={styles.importActions}>
                    <div className={styles.importButton}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.frameItem} />
                        <div className={styles.importPlaceholder}>
                          <b className={styles.empty}>1</b>
                        </div>
                      </div>
                      <div className={styles.importAction}>
                        <b className={styles.import}>IMPORT</b>
                      </div>
                    </div>
                    <div className={styles.downloadAction}>
                      <div className={styles.ellipseGroup}>
                        <div className={styles.frameInner} />
                        <b className={styles.b}>3</b>
                      </div>
                      <div className={styles.downloadName}>
                        <b className={styles.downloads}>DOWNLOADS</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.clickAppOptionsParent}>
                  <div className={styles.clickAppOptions}>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.ellipseDiv} />
                      <b className={styles.b1}>2</b>
                    </div>
                    <div className={styles.clickAppNames}>
                      <b className={styles.clickapps}>CLICKAPPS</b>
                    </div>
                  </div>
                  <div className={styles.clickAppOptions1}>
                    <div className={styles.frameDiv}>
                      <div className={styles.frameChild1} />
                      <b className={styles.b2}>4</b>
                    </div>
                    <div className={styles.clickappsWrapper}>
                      <b className={styles.clickapps1}>CLICKAPPS</b>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.buttonLarge2}>
                <a className={styles.primaryButton2}>Learn More</a>
                <div className={styles.buttonLargeInner}>
                  <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.logoRowsParent}>
            <div className={styles.logoRows}>
              <div className={styles.slackLogos}>
                <div className={styles.slackLogos1}>
                  <img
                    className={styles.slackTechnologiesLogo1Icon}
                    loading="lazy"
                    alt=""
                    src="/slack-technologieslogo-1@2x.png"
                  />
                </div>
                <div className={styles.slackTechnologiesLogo1Wrapper}>
                  <img
                    className={styles.slackTechnologiesLogo1Icon1}
                    alt=""
                    src="/slack-technologieslogo-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.googleLogos}>
                <div className={styles.googleLogoPlaceholder}>
                  <img
                    className={styles.cef1014c0b5e49e81Icon}
                    loading="lazy"
                    alt=""
                    src="/58482879cef1014c0b5e49e8-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.logoRows1}>
              <div className={styles.frameParent}>
                <div className={styles.c6bc0beee9410fe137d91e1Wrapper}>
                  <img
                    className={styles.c6bc0beee9410fe137d91e1Icon}
                    loading="lazy"
                    alt=""
                    src="/62c6bc0beee9410fe137d91e-1@2x.png"
                  />
                </div>
                <div className={styles.f98b51c2ec00048c6c731Wrapper}>
                  <img
                    className={styles.f98b51c2ec00048c6c731Icon}
                    loading="lazy"
                    alt=""
                    src="/6002f98b51c2ec00048c6c73-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.logoRowsInner}>
                <div className={styles.googleCalendarLogo1Wrapper}>
                  <img
                    className={styles.googleCalendarLogo1Icon}
                    loading="lazy"
                    alt=""
                    src="/google-calendarlogo-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.downloadLogos}>
              <div className={styles.downloadLogoPlaceholders}>
                <img
                  className={styles.a768a6515b1e0ad75afd1Icon}
                  loading="lazy"
                  alt=""
                  src="/5842a768a6515b1e0ad75afd-1@2x.png"
                />
              </div>
              <div className={styles.downloadLogoPlaceholders1}>
                <img
                  className={styles.download11}
                  loading="lazy"
                  alt=""
                  src="/download-1-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.useCases}>
        <div className={styles.useCasesContent}>
          <b className={styles.useCases1}>Use Cases</b>
          <div className={styles.useCaseCards}>
            <div className={styles.useCasePairs}>
              <div className={styles.frameGroup}>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img
                    className={styles.performanceIcon}
                    loading="lazy"
                    alt=""
                    src="/performance.svg"
                  />
                </div>
                <div className={styles.userPerformance}>
                  <b className={styles.employeeOnboarding}>
                    Employee onboarding
                  </b>
                  <div className={styles.buildAScalableContainer}>
                    <p
                      className={styles.buildAScalable}
                    >{`Build a scalable onboarding program with individualized tasks and all employee/ staff requirements needed to bring the team up `}</p>
                    <p className={styles.toSpeed}>to speed.</p>
                  </div>
                </div>
              </div>
              <div className={styles.userPerformance1}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameChild2} />
                  <img
                    className={styles.userIcon}
                    loading="lazy"
                    alt=""
                    src="/3-user.svg"
                  />
                </div>
                <div className={styles.performanceGoalTrackingParent}>
                  <h3
                    className={styles.performanceGoal}
                  >{`Performance & goal tracking`}</h3>
                  <div className={styles.trackEmployeePerformance}>
                    Track employee performance with real-time reporting that
                    enables you to visualize tasks completed, targets progress
                    towards goals, and much more.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.useCasePairs1}>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameChild3} />
                  <img
                    className={styles.userIcon1}
                    alt=""
                    src="/3-user-1.svg"
                  />
                </div>
                <div className={styles.performanceGoalTrackingGroup}>
                  <div
                    className={styles.performanceGoal1}
                  >{`Performance & goal tracking`}</div>
                  <div className={styles.trackEmployeePerformance1}>
                    Track employee performance with real-time reporting that
                    enables you to visualize tasks completed, targets, progress
                    towards goals, and much more.
                  </div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild4} />
                  <img
                    className={styles.performanceIcon1}
                    alt=""
                    src="/performance-1.svg"
                  />
                </div>
                <div className={styles.employeeOnboardingParent}>
                  <b className={styles.employeeOnboarding1}>
                    Employee onboarding
                  </b>
                  <div className={styles.buildAScalable1}>
                    Build a scalable onboarding program with individualized
                    tasks and all employee/ staff requirements needed to bring
                    the team up to speed.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.viewMoreButton}>
            <div className={styles.buttonLarge3}>
              <div className={styles.buttonContent}>
                <a className={styles.primaryButton3}>Learn More</a>
                <img
                  className={styles.buttonContentChild}
                  alt=""
                  src="/arrow-1.svg"
                />
              </div>
            </div>
          </button>
        </div>
      </section>
      <section className={styles.clientName}>
        <div className={styles.teamworkVisual}>
          <div className={styles.teamworkButton}>
            <h1 className={styles.whatOurClients}>
              What our clients have to say...
            </h1>
            <div className={styles.testimonial}>
              <div className={styles.companyInfo}>
                <img
                  className={styles.quoteContentIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-1000003014@2x.png"
                />
              </div>
              <img
                className={styles.quoteIcon}
                loading="lazy"
                alt=""
                src="/quote.svg"
              />
              <div className={styles.resourcesLinks}>
                <div className={styles.copyright}>
                  <div className={styles.weWouldntHaveSuchGreatCoParent}>
                    <h2 className={styles.weWouldntHave}>
                      We wouldn’t have such great connection with different
                      departments if it weren’t for Promage. Thanks to Promage I
                      can easily interact with engineers directly and build
                      working relationships, and that has been extremely
                      valuable.
                    </h2>
                    <img
                      className={styles.quoteIcon1}
                      alt=""
                      src="/quote-1.svg"
                    />
                  </div>
                  <i className={styles.kylerRoseContainer}>
                    <p className={styles.kylerRose}>
                      Kyler Rose // Marketing Services Manager, Saturn
                    </p>
                  </i>
                </div>
                <div className={styles.rating}>
                  <div className={styles.stars} />
                  <div className={styles.stars1} />
                  <div className={styles.stars2} />
                  <div className={styles.stars3} />
                  <div className={styles.stars4} />
                  <div className={styles.stars5} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.teamworkContentWrapper}>
            <div className={styles.teamworkContent}>
              <h1 className={styles.seeEverythingThe}>
                See everything the team is working on in one place.
              </h1>
              <div className={styles.buttonLargeWrapper}>
                <button className={styles.buttonLarge4}>
                  <b className={styles.primaryButton4}>Get Started Now</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.vectorParent}>
        <img
          className={styles.frameChild5}
          loading="lazy"
          alt=""
          src="/arrow-2.svg"
        />
        <img className={styles.frameChild6} alt="" src="/arrow-1-2.svg" />
      </div>
      <footer className={styles.footer}>
        <div className={styles.bg} />
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent3}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent4}>
                  <div className={styles.logoParent}>
                    <div className={styles.logo} />
                    <b className={styles.promage1}>Promage</b>
                  </div>
                  <div className={styles.yourNo1ProjectManagementTParent}>
                    <p
                      className={styles.yourNo1}
                    >{`Your No 1 project management tool for better workflow and improved efficiency. `}</p>
                    <div className={styles.contactParent}>
                      <b className={styles.contact}>Contact</b>
                      <b className={styles.hellopromagecom}>
                        hello@promage.com
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footerColumnTwo}>
                <div className={styles.companyParent}>
                  <b className={styles.company1}>Company</b>
                  <div className={styles.companyLinks}>
                    <b className={styles.about}>About</b>
                    <b className={styles.team}>Team</b>
                    <b className={styles.faqs}>FAQs</b>
                    <b className={styles.blogs}>Blogs</b>
                    <b className={styles.career}>Career</b>
                  </div>
                </div>
                <div className={styles.productParent}>
                  <b className={styles.product}>Product</b>
                  <div className={styles.productLinks}>
                    <b className={styles.tasks}>Tasks</b>
                    <b className={styles.docs}>Docs</b>
                    <b className={styles.goals}>Goals</b>
                    <b className={styles.chat}>Chat</b>
                    <b className={styles.whiteboard}>Whiteboard</b>
                    <b className={styles.dashboard}>Dashboard</b>
                  </div>
                </div>
                <div className={styles.resourcesParent}>
                  <b className={styles.resources}>Resources</b>
                  <div className={styles.resourcesLinks1}>
                    <b className={styles.quickStart}>Quick Start</b>
                    <b className={styles.libraries}>Libraries</b>
                    <b className={styles.apiDocumentation}>API Documentation</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.border} />
        </div>
        <div className={styles.promageAllRightsReservedWrapper}>
          <p className={styles.promageAllRights}>
            2022 @Promage. All rights reserved. -- Privacy Policy - Terms of
            Services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SaasLndingPage;
