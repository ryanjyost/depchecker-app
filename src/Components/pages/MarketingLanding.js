import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import { RouteMap as ROUTES } from 'Routes';
import { COLORS } from 'Styles';
import { MainHeader } from 'Components/ui';
import BasicHeader from 'Components/ui/BasicHeader';
import ExampleImage from 'Assets/images/depchecker-preview.png';
import { useResponsive } from 'Components/hooks';

export default function Landing() {
   const styles = { ...COLORS };
   const isWide = !useResponsive('md');

   const renderSingleBenefit = (title, desc, icon) => {
      return (
         <div
            style={{
               display: 'flex',
               justifyContent: 'flex-start',
               alignItems: 'flex-start',
               flexDirection: 'column',
               maxWidth: 300,
               width: '100%',
               padding: 20
            }}>
            <Icon
               style={{
                  fontSize: 40,
                  color: styles.blue,
                  margin: '2px 5px'
               }}
               type={icon}
            />

            <div style={{ margin: '20px 0px 0px 0px', fontSize: 18 }}>
               <h4
                  style={{
                     marginBottom: 10,
                     color: styles.blackOp(0.6),
                     lineHeight: 1.2
                  }}>
                  <strong style={{ color: styles.blackOp(0.8) }}>{title} </strong>
               </h4>
               <h5 style={{ marginBottom: 0, color: styles.blackOp(0.6) }}>{desc}</h5>
            </div>
         </div>
      );
   };

   const First = ({ styles }) => {
      return (
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               flexWrap: 'wrap',
               justifyContent: 'center'
            }}>
            <div style={{ flex: 1, padding: '40px 20px 0px 20px' }}>
               <h1
                  style={{
                     fontSize: 36,
                     lineHeight: 1.2,
                     fontWeight: '700',
                     color: styles.blackOp(0.95),
                     paddingRight: 20,
                     marginBottom: 20
                  }}>
                  Maintain JavaScript projects?
               </h1>
               <h2
                  style={{
                     lineHeight: 1.4,
                     color: styles.blackOp(0.6),
                     fontSize: 18,
                     marginBottom: 20,
                     paddingRight: 20
                  }}>
                  {/*Quickly and easily discover dependency management opportunities that lead to better software, more*/}
                  {/*billable hours and happier clients.*/}
                  DepChecker makes it easy to understand the state of your projects' npm dependencies, so that you can
                  more efficiently make version updates, discover potential issues and maintain your software.
               </h2>
               <Link id={`ctaTopLanding`} to={ROUTES.BASIC_INDEX}>
                  <Button
                     id={`ctaTopLanding`}
                     size={'large'}
                     type={'primary'}
                     className={'pulsingButton'}
                     style={{ marginBottom: 10 }}>
                     {/*<span style={{ paddingRight: 8, fontWeight: 'bold' }}>*/}
                     {/*   Analyze a <code style={{ color: '#fff' }}>package.json</code>*/}
                     {/*</span>{' '}*/}
                     <span style={{ paddingRight: 8, fontWeight: 'bold' }}>Analyze Dependencies</span> &rarr;
                  </Button>
               </Link>
               <h5
                  style={{
                     paddingLeft: 5,
                     color: styles.blackOp(0.4),
                     maxWidth: 300
                  }}>
                  No need to provide email, payment or spare kidney for for basic version.
               </h5>
            </div>
            <div style={{ flex: 1.3, padding: 10 }}>
               <BrowserPreview styles={styles} isMain>
                  <img src={ExampleImage} width="100%" />
               </BrowserPreview>
            </div>
         </div>
      );
   };

   const BrowserPreview = ({ children, isMain, styles }) => {
      const Dot = ({ isLeft }) => {
         return (
            <div
               style={{
                  height: 8,
                  width: 8,
                  backgroundColor: styles.blackOp(0.06),
                  borderRadius: 10,
                  margin: isLeft ? '0px 3px 0px 6px' : '0px 3px'
               }}
            />
         );
      };

      return (
         <div
            style={{
               borderRadius: 3,
               margin: 'auto',
               display: 'block',
               boxShadow: `0 20px 40px 0 ${styles.blackOp(0.3)}`,
               border: '2px solid rgba(0,0,0,0.05)',
               minWidth: isMain ? 300 : null,
               maxWidth: isMain ? null : null,
               width: '100%'
            }}>
            <div
               style={{
                  width: '100%',
                  borderTopRightRadius: 3,
                  borderTopLeftRadius: 3,
                  backgroundColor: '#f0f2f5',
                  height: 20,
                  display: 'flex',
                  alignItems: 'center'
               }}>
               <Dot isLeft /> <Dot /> <Dot />
            </div>

            {children}
         </div>
      );
   };

   const FeaturesOld = ({ styles }) => {
      const renderSingleFeature = (title, desc, img) => {
         return (
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: isWide ? 'row' : 'column-reverse',
                  width: '100%',
                  maxWidth: 1000,
                  padding: isWide ? '50px 20px' : '50px 0px'
               }}>
               <BrowserPreview styles={styles}>
                  <img src={img} width={'100%'} />
               </BrowserPreview>
               <div
                  style={{
                     margin: isWide ? '20px 40px 20px 40px' : '20px 20px 20px 20px',
                     fontSize: 18,
                     flex: 1.7,
                     minWidth: isWide ? 400 : 300
                  }}>
                  <h3
                     style={{
                        marginBottom: 10,
                        color: styles.blackOp(0.6),
                        lineHeight: 1.2
                     }}>
                     <strong style={{ color: styles.blackOp(0.8) }}>{title} </strong>
                  </h3>
                  <div style={{ marginBottom: 0, color: styles.blackOp(0.6) }}>{desc}</div>
               </div>
            </div>
         );
      };

      return (
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               width: '100%'
            }}>
            <SectionHeader>This is the part where I show you some features</SectionHeader>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  width: '100%',
                  flexWrap: 'wrap'
               }}>
               {renderSingleFeature(
                  <span>Drag n' drop? Or copy n' paste?</span>,
                  <div>
                     <div style={{ paddingBottom: 10 }}>
                        That's the hardest decision you'll need to make to get started.
                     </div>
                     On the other hand, installing and integrating complex CI/CD tools costs time and big bucks. It's
                     overkill for most projects. With DepChecker, all you need is the contents of a{' '}
                     <code>package.json</code> file.
                  </div>,
                  `/images/landing-1.png`
               )}

               {renderSingleFeature(
                  <span>Organized interface for efficient analysis</span>,
                  <span>
                     See everything clearly in one central, sortable and filterable table. No more headaches from messy
                     command line outputs. No more jumping from browser to terminal to project and back again.
                  </span>,
                  `/images/landing-2.png`
               )}

               {renderSingleFeature(
                  <span>Aggregated data, stats and links</span>,
                  <div>
                     DepChecker collects the information you need to make good dependency decisions in seconds. View
                     GitHub stars, project license, weekly download counts, last publish, and more. Oh, and quick links
                     to everything that matters.
                  </div>,
                  `/images/landing-3.png`
               )}

               {renderSingleFeature(
                  <span>Export to CSV</span>,
                  <span>
                     Share the report with clients to spark conversations. Include it in proposals and SOWs. Because
                     sometimes you just need a good old-fashioned spreadsheet.
                  </span>,
                  `/images/landing-4.png`
               )}
            </div>
         </div>
      );
   };

   const Features = () => {
      const features = [
         {
            text: (
               <span>
                  <strong>
                     Multiple ways to provide a <code>package.json</code> file
                  </strong>{' '}
                  - use a GitHub repo URL, upload the file from your computer, or just paste the code.
               </span>
            ),
            comingSoon: false
         },
         {
            text: (
               <span>
                  <strong>Actionable, color-coded, easy-to-read analysis report</strong> within seconds.
               </span>
            ),
            comingSoon: false
         },
         {
            text: (
               <span>
                  <strong>Analysis summary</strong> as well as <strong>specific metrics for each dependency</strong>.
               </span>
            ),
            comingSoon: false
         },
         {
            text: <span>Access your most recent project dependency analysis without re-running from scratch.</span>,
            comingSoon: false
         },
         {
            text: (
               <span>
                  <strong>Links for every dependency to GitHub, npm and homepage</strong> in one convenient table.
               </span>
            ),
            comingSoon: false
         },
         {
            text: (
               <span>
                  <strong>Link your GitHub account</strong> so that DepChecker can automatically analyze the repos you
                  want it to.
               </span>
            ),
            comingSoon: true
         },
         {
            text: (
               <span>
                  <strong>Single dependency analysis</strong> who when you are vetting new dependencies to use in your
                  projects.
               </span>
            ),
            comingSoon: true
         },
         {
            text: (
               <span>
                  <strong>Regular reports emailed to you</strong> that point out potential issues before they hurt your
                  codebase.
               </span>
            ),
            comingSoon: true
         },
         {
            text: (
               <span>
                  <strong>Dependency trends</strong> for metrics like GitHub stars, downloads, etc. that provide a
                  deeper, more nuanced analysis of your dependencies.
               </span>
            ),
            comingSoon: true
         }
      ];

      function renderSingleFeature(feature, key) {
         return (
            <div key={key} style={{ display: 'flex', alignItems: 'center', margin: '20px 0px' }}>
               <Icon
                  style={{
                     fontSize: 24,
                     color: styles.blueOp(0.6),
                     margin: '0px 20px 0px 0px'
                  }}
                  type={feature.comingSoon ? 'plus-square' : 'check-square'}
               />
               <div style={{ display: 'flex' }}>
                  <h3 style={{ display: '' }}>
                     {feature.text}{' '}
                     {feature.comingSoon && (
                        <a
                           style={{ paddingLeft: 5 }}
                           href={feature.issueLink || 'https://github.com/ryanjyost/depchecker/issues'}>
                           {' '}
                           <span style={{ fontSize: 20 }}>👉</span> Upvote on GitHub
                        </a>
                     )}
                  </h3>
               </div>
            </div>
         );
      }

      return (
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               width: '100%'
            }}>
            <SectionHeader>This is the part where I show you some features</SectionHeader>
            <div
               style={{
                  display: 'flex',
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'baseline',
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  maxWidth: 600,
                  marginTop: 10
               }}>
               {features.filter(f => !f.comingSoon).map((feature, i) => renderSingleFeature(feature, i))}
               <h2
                  style={{
                     textAlign: 'center',
                     width: '100%',
                     margin: '50px 0px 10px 0px',
                     fontWeight: 'bold',
                     color: styles.blue
                  }}>
                  These features are coming soon!
               </h2>
               {features.filter(f => f.comingSoon).map((feature, i) => renderSingleFeature(feature, i))}
            </div>
         </div>
      );
   };

   const Benefits = ({ styles }) => {
      return (
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               width: '100%'
            }}>
            <SectionHeader>It's a small tool with big benefits</SectionHeader>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  width: '100%',
                  flexWrap: 'wrap'
               }}>
               {renderSingleBenefit(
                  'Save developer time',
                  <span>
                     Don't waste any more developer time on trivial information gathering. Just use DepChecker and get
                     actionable insights in seconds.
                  </span>,
                  'clock-circle'
               )}
               {/*{renderSingleBenefit(*/}
               {/*   'Increase billable hours',*/}
               {/*   `Use the time you save to refactor for version upgrades, remove dependencies with non-commercial licenses, replace unmaintained open source solutions, and more...`,*/}
               {/*   'line-chart'*/}
               {/*)}*/}
               {renderSingleBenefit(
                  'More maintainable code',
                  `DepChecker's proactive monitoring makes it easy to manage your 3rd party npm dependencies.`,
                  'code'
               )}
               {renderSingleBenefit(
                  'Avoid maintenance fire drills ',
                  `By proactively reviewing dependencies, you'll update and refactor before one of myriad inevitable issues gives you no other choice at an inopportune time.`,
                  'fire'
               )}
               {/*{renderSingleBenefit(*/}
               {/*   `Make your clients happier`,*/}
               {/*   `Clients like to know they're being taken care of. Give them peace of mind through regular dependency management.`,*/}
               {/*   'team'*/}
               {/*)}*/}

               {/*{renderSingleBenefit(*/}
               {/*   'Avoid maintenance fire drills',*/}
               {/*   `By proactively reviewing dependencies, you'll update and refactor before one of myriad inevitable issues gives you no other choice at an inopportune time.`,*/}
               {/*   'fire'*/}
               {/*)}*/}
               {/*{renderSingleBenefit(*/}
               {/*   'Avoid maintenance fire drills ',*/}
               {/*   `By proactively reviewing dependencies, you'll update and refactor before one of myriad inevitable issues gives you no other choice at an inopportune time.`,*/}
               {/*   'code'*/}
               {/*)}*/}
               {/*{renderSingleBenefit(*/}
               {/*   'Avoid maintenance fire drills ',*/}
               {/*   `By proactively reviewing dependencies, you'll update and refactor before one of myriad inevitable issues gives you no other choice at an inopportune time.`,*/}
               {/*   'code'*/}
               {/*)}*/}
            </div>
         </div>
      );
   };

   const HowItWorks = ({ styles }) => {
      const renderSection = (step, text, icon) => {
         return (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1
               }}>
               <div>
                  <Icon
                     style={{
                        fontSize: 60,
                        color: styles.blue,
                        margin: '2px 5px'
                     }}
                     type={icon}
                  />
               </div>
               <div
                  style={{
                     margin: '20px 0px 0px 0px',
                     fontSize: 18,
                     textAlign: 'center'
                  }}>
                  <h2
                     style={{
                        marginBottom: 5,
                        color: styles.blackOp(0.95),
                        fontSize: 20,
                        fontWeight: '900'
                     }}>
                     {step}
                  </h2>
                  <h5 style={{ marginBottom: 0, color: styles.blackOp(0.6) }}>{text}</h5>
               </div>
            </div>
         );
      };

      return (
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center'
            }}>
            <SectionHeader> There's nothing to setup or install</SectionHeader>
            <div
               style={{
                  display: 'flex',
                  flexDirection: isWide ? 'row' : 'column',
                  justifyContent: isWide ? 'space-between' : 'center',
                  alignItems: isWide ? 'baseline' : 'center',
                  width: '100%',
                  maxWidth: 700,
                  marginTop: 30
               }}>
               {renderSection('Upload', 'a package.json file', 'cloud-upload')}
               <h2 style={{ color: styles.blackOp(0.4), margin: '20px 0px' }}>
                  {isWide ? <span>&rarr;</span> : <span>&darr;</span>}
               </h2>
               {renderSection('Relax', 'while DepChecker does its thing', 'coffee')}
               <h2 style={{ color: styles.blackOp(0.4), margin: '20px 0px' }}>
                  {isWide ? <span>&rarr;</span> : <span>&darr;</span>}
               </h2>
               {renderSection('Improve', 'your project based on the analysis results', 'rise')}
            </div>
         </div>
      );
   };

   const Explanation = ({ styles }) => {
      return (
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column'
            }}>
            <SectionHeader>Find valuable work to be done in seconds.</SectionHeader>
            <div
               style={{
                  maxWidth: 700
               }}>
               <h3
                  style={{
                     marginBottom: 20,
                     textAlign: 'center',
                     color: styles.blackOp(0.9)
                  }}>
                  DepChecker analyzes <code>package.json</code> files to generate insightful and exportable dependency
                  reports. It helps software consultants with ongoing maintenance engagements deliver more and higher
                  quality services to their clients.
               </h3>
            </div>
         </div>
      );
   };

   const PotentialIssues = () => {
      return (
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column'
            }}>
            <SectionHeader>So, what does this thing do exactly?</SectionHeader>
            <div
               style={{
                  maxWidth: 700
               }}>
               <h2
                  style={{
                     marginBottom: 50,
                     textAlign: 'center',
                     color: styles.blackOp(0.7)
                  }}>
                  DepChecker analyzes important aspects of your projects' npm dependencies and summarizes the results.
               </h2>
            </div>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  width: '100%',
                  flexWrap: 'wrap'
               }}>
               {renderSingleBenefit(
                  'Versions behind the latest release',
                  <span>
                     This is the standard metric we think about when assessing the state of our dependencies. But it
                     ain't the whole picture.
                  </span>,
                  'fork'
               )}
               {renderSingleBenefit(
                  'Last publish to npm',
                  <span>
                     How long's it been since the maintainer pushed an update? If it's been too long, the project may
                     have been abandoned, leaving you vulnerable to issues.
                  </span>,
                  'edit'
               )}
               {renderSingleBenefit(
                  'Weekly downloads from npm',
                  <span>
                     This is a solid metric for how much a dependency is actually being used, and an inclining or
                     declining download count can impact your decision to use it.
                  </span>,
                  'cloud-download'
               )}
               {renderSingleBenefit(
                  'GitHub Stars',
                  <span>
                     How popular a package is means a lot for finding support, tutorials, etc. And if the project hasn't
                     been starred for a while, it might be time to consider alternatives.
                  </span>,
                  'star'
               )}
               {renderSingleBenefit(
                  'Project license',
                  <span>
                     Not every project has the awesome "MIT" license, which can mean trouble for how and when you use
                     dependencies with more stringent legal requirements.
                  </span>,
                  'file-text'
               )}
               {renderSingleBenefit(
                  'Important links',
                  <span>
                     Rather than randomly googling and jumping from npm to docs to GitHub, DepChecker aggregates these
                     links in a convenient interface for quick reference.
                  </span>,
                  'link'
               )}
            </div>
         </div>
      );
   };

   const BehindTheCurtain = ({ styles }) => {
      return (
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column'
            }}>
            <SectionHeader>Don't see the features you need? Just ask.</SectionHeader>
            <div
               style={{
                  maxWidth: 700
               }}>
               <h3
                  style={{
                     marginBottom: 20,
                     textAlign: 'center',
                     color: styles.blackOp(0.9)
                  }}>
                  This is the absolute minimal version of a product being built by me,{' '}
                  <a href="https://ryanjyost.com" target={'_blank'}>
                     Ryan
                  </a>{' '}
                  👋. I'm the only one working on DepChecker, which means the feedback loop is as short as it gets.
               </h3>
               <h3
                  style={{
                     marginBottom: 20,
                     textAlign: 'center',
                     color: styles.blackOp(0.9)
                  }}>
                  <a href={'mailto:ryanjyost@gmail.com'}>Shoot me an email </a> or{' '}
                  <a href={'https://github.com/ryanjyost/depchecker/issues/new'}>open a GitHub issue</a> with your
                  feature needs, dependency management pain points, unrelenting feedback, etc. and we'll chat about how
                  to make DepChecker more helpful to you.
               </h3>
            </div>
         </div>
      );
   };

   const SectionHeader = ({ children }) => {
      return (
         <h1
            style={{
               textAlign: 'center',
               fontWeight: '900',
               display: 'inline-block',
               padding: '0px 30px 5px 30px',
               color: styles.blackOp(1),
               fontSize: 26,
               marginBottom: 10
            }}>
            {children}
         </h1>
      );
   };

   const SectionSubHeader = ({ children }) => {
      return (
         <h3
            style={{
               textAlign: 'center',
               fontWeight: 'bold',
               display: 'inline-block',
               padding: '0px 30px 5px 30px',
               marginBottom: 40,
               color: 'rgba(0,0,0,0.95)'
            }}>
            {children}
         </h3>
      );
   };

   const Last = () => {
      return (
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column',
               backgroundColor: styles.blueOp(0.05),
               border: `1px solid ${styles.blue}`,
               padding: '50px 20px',
               borderRadius: 5,
               maxWidth: 800,
               margin: 'auto'
            }}>
            <SectionHeader>
               <span>If it saves you time...why not?</span>
            </SectionHeader>
            <Link to={ROUTES.BASIC_INDEX}>
               <Button id={`ctaBottomLanding`} size={'large'} type={'primary'} style={{ marginTop: 20 }}>
                  <span style={{ paddingRight: 8, fontWeight: 'bold' }}>Analyze dependencies</span> &rarr;
               </Button>
            </Link>
         </div>
      );
   };

   return (
      <div>
         <div
            style={{
               maxWidth: 1100,
               minHeight: '100vh',
               width: '100%',
               margin: 'auto'
            }}>
            <BasicHeader />
            <div style={{ padding: '50px 20px 50px 20px' }}>
               <First styles={styles} />
            </div>{' '}
            <div style={{ padding: '100px 20px 100px 20px' }}>
               <PotentialIssues />
            </div>
            {/*<div*/}
            {/*   style={{*/}
            {/*      padding: '100px 20px 100px 20px',*/}
            {/*      display: 'flex',*/}
            {/*      justifyContent: 'center'*/}
            {/*   }}>*/}
            {/*   <Explanation styles={styles} />*/}
            {/*</div>*/}
            <div style={{ padding: '100px 20px 100px 20px' }}>
               <HowItWorks styles={styles} />
            </div>
            <div style={{ padding: '50px 20px 50px 20px' }}>
               <Benefits styles={styles} />
            </div>
            <div style={{ padding: '100px 20px 100px 20px' }}>
               {/*<Features styles={styles} />*/}
               <Features />
            </div>
            <div style={{ padding: '50px 20px 100px 20px' }}>
               <BehindTheCurtain styles={styles} />
            </div>
            <div style={{ padding: '50px 20px 100px 20px' }}>
               <Last styles={styles} />
            </div>
         </div>
      </div>
   );
}
