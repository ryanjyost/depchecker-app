import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import { Button, Icon } from 'antd';
import { RouteMap as ROUTES } from 'Routes';
import { COLORS } from 'Styles';
import { BasicHeader, BasicFooter, MainHeader } from 'Components/ui';
import { useResponsive } from 'Components/hooks';

const Root = styled.div`
   .anticon {
      color: ${COLORS.blue};
   }
`;

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
                  color: COLORS.blue,
                  fontSize: 40,
                  margin: '2px 5px'
               }}
               type={icon}
            />

            <div style={{ margin: '20px 0px 0px 0px', fontSize: 18 }}>
               <h4
                  style={{
                     marginBottom: 10,
                     lineHeight: 1.2
                  }}>
                  <strong>{title} </strong>
               </h4>
               <h5 style={{ marginBottom: 0, opacity: 0.7 }}>{desc}</h5>
            </div>
         </div>
      );
   };

   const First = ({ styles }) => {
      return (
         <div style={{ position: 'relative' }}>
            <Particles width="100%" height="80vh" />
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: 'calc(100vh - 200px)',
                  width: '100%'
               }}>
               <div style={{ flex: 1, padding: '40px 20px 0px 20px', textAlign: 'center' }}>
                  <h1
                     style={{
                        fontSize: 40,
                        lineHeight: 1.2,
                        fontWeight: '700',
                        paddingRight: 20,
                        marginBottom: 20
                     }}>
                     Better code reviews, fewer headaches
                  </h1>
                  <h2
                     style={{
                        lineHeight: 1.4,
                        fontSize: 22,
                        paddingRight: 20,
                        maxWidth: 600,
                        margin: 'auto',
                        marginBottom: 40
                     }}>
                     DepChecker provides all of the data your team needs to thoroughly review npm dependency changes,
                     right in your GitHub pull requests.
                  </h2>
                  <Button
                     shape="round"
                     type="primary"
                     size="large"
                     className={'pulsingButton'}
                     href={`https://github.com/apps/${process.env.REACT_APP_GH_APP_NAME}/installations/new`}>
                     <Icon style={{ color: '#fff' }} color={'#fff'} type="github" />
                     Sign Up
                  </Button>
                  <Button href="#how-it-works" shape="round" type="secondary" size="large" style={{ marginLeft: 10 }}>
                     Learn how it works
                  </Button>
                  {/*<h5*/}
                  {/*   style={{*/}
                  {/*      paddingLeft: 5,*/}
                  {/*      maxWidth: 300,*/}
                  {/*      opacity: 0.6*/}
                  {/*   }}>*/}
                  {/*   No need to provide email, payment or spare kidney for for basic version.*/}
                  {/*</h5>*/}
               </div>
               {/*<div style={{ flex: 1.3, padding: 10 }}>*/}
               {/*   <BrowserPreview styles={styles} isMain>*/}
               {/*      <img src={"/depchecker-preview.png"} width="100%" />*/}
               {/*   </BrowserPreview>*/}
               {/*</div>*/}
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
                  backgroundColor: styles.whiteOp(0.2),
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
               boxShadow: `0 20px 40px 0 ${styles.whiteOp(0.2)}`,
               border: `2px solid ${COLORS.whiteOp(0.1)}`,
               minWidth: isMain ? 300 : null,
               maxWidth: isMain ? null : null,
               width: '100%'
            }}>
            <div
               style={{
                  width: '100%',
                  borderTopRightRadius: 3,
                  borderTopLeftRadius: 3,
                  // backgroundColor: '#f0f2f5',
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
                        // color: styles.blackOp(0.6),
                        lineHeight: 1.2
                     }}>
                     <strong
                        style={
                           {
                              // color: styles.blackOp(0.8)
                           }
                        }>
                        {title}{' '}
                     </strong>
                  </h3>
                  <div
                     style={{
                        marginBottom: 0
                        // color: styles.blackOp(0.6)
                     }}>
                     {desc}
                  </div>
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
                     // color: styles.blueOp(0.6),
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
                     fontWeight: 'bold'
                     // color: styles.blue
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
                  'Avoid preventable issues',
                  `By proactively reviewing dependencies, your team will understand and know how to manage 3rd party code.`,
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
      const renderSection = (step, text, icon, stepNum) => {
         return (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  margin: isWide ? '20px 20px' : '40px 0px',
                  maxWidth: 300
               }}>
               <div style={{ width: '50%', textAlign: 'left', fontSize: 18, fontWeight: '500' }}>{stepNum}</div>
               <div style={{ background: 'rgba(255, 255, 255, 0.1)', padding: 20, borderRadius: '50%' }}>
                  <Icon
                     style={{
                        fontSize: 60,
                        // color: styles.blue,
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
                        marginBottom: 15,
                        // color: styles.blackOp(0.95),
                        fontSize: 20,
                        fontWeight: '700'
                     }}>
                     {step}
                  </h2>
                  <h5
                     style={{
                        marginBottom: 0
                        // color: styles.blackOp(0.6)
                     }}>
                     {text}
                  </h5>
               </div>
            </div>
         );
      };

      return (
         <div
            id="how-it-works"
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               paddingTop: 50
            }}>
            <SectionHeader>How it works</SectionHeader>
            <div
               style={{
                  display: 'flex',
                  flexDirection: isWide ? 'row' : 'column',
                  justifyContent: isWide ? 'space-between' : 'center',
                  alignItems: isWide ? 'baseline' : 'center',
                  width: '100%',
                  maxWidth: 1100,
                  marginTop: 30
               }}>
               {renderSection(
                  'Open a pull request',
                  <span>
                     If there are any diffs in <code>package.json</code>, it's go time for DepChecker.{' '}
                  </span>,
                  'pull-request',
                  1
               )}
               {/*<h2*/}
               {/*   style={{*/}
               {/*      // color: styles.blackOp(0.4),*/}
               {/*      margin: '20px 0px'*/}
               {/*   }}>*/}
               {/*   {isWide ? <span>&rarr;</span> : <span>&darr;</span>}*/}
               {/*</h2>*/}
               {renderSection(
                  'Get valuable info',
                  'For each new or updated dependency, DepChecker aggregates pertinent data and posts it in your pull request on GitHub.',
                  'github',
                  2
               )}
               {/*<h2*/}
               {/*   style={{*/}
               {/*      // color: styles.blackOp(0.4),*/}
               {/*      margin: '20px 0px'*/}
               {/*   }}>*/}
               {/*   {isWide ? <span>&rarr;</span> : <span>&darr;</span>}*/}
               {/*</h2>*/}
               {renderSection(
                  'Review quickly + confidently',
                  'With insightful data and easy links, your team will make informed dependency decisions and ship higher quality code.',
                  'smile',
                  3
               )}
            </div>
            <div style={{ padding: 10, maxWidth: 800, marginTop: 50 }}>
               <BrowserPreview styles={styles} isMain>
                  <img src={'/depchecker-pr-preview.png'} width="100%" />
               </BrowserPreview>
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
                     textAlign: 'center'
                     // color: styles.blackOp(0.9)
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
            id="features"
            style={{
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column',
               paddingTop: 50
            }}>
            <SectionHeader>
               DepChecker aggregates the following data
               <br /> for each dependency
            </SectionHeader>
            {/*<div*/}
            {/*   style={{*/}
            {/*      maxWidth: 700*/}
            {/*   }}>*/}
            {/*   <h2*/}
            {/*      style={{*/}
            {/*         marginBottom: 50,*/}
            {/*         textAlign: 'center'*/}
            {/*         // color: styles.blackOp(0.7)*/}
            {/*      }}>*/}
            {/*      DepChecker analyzes important aspects of your projects' npm dependencies and summarizes the results.*/}
            {/*   </h2>*/}
            {/*</div>*/}
            <div
               style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  width: '100%',
                  flexWrap: 'wrap',
                  paddingTop: 40
               }}>
               {/*{renderSingleBenefit(*/}
               {/*   'Versions behind the latest release',*/}
               {/*   <span>*/}
               {/*      This is the standard metric we think about when assessing the state of our dependencies. But it*/}
               {/*      ain't the whole picture.*/}
               {/*   </span>,*/}
               {/*   'fork'*/}
               {/*)}*/}
               {renderSingleBenefit(
                  'Important links',
                  <span>
                     Rather than randomly googling and jumping from npm to docs to GitHub, DepChecker aggregates these
                     links for quick reference.
                  </span>,
                  'link'
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
                  <span>How popular a package is means a lot for finding support, tutorials, etc.</span>,
                  'star'
               )}
               {renderSingleBenefit(
                  'Project license',
                  <span>
                     Not every project has the awesome "MIT" license, which can mean trouble if not understood and
                     addressed.
                  </span>,
                  'file-text'
               )}
               {renderSingleBenefit(
                  'Open Issues & PRs',
                  <span>Are there too many open issues compared to the popularity of the dependency?</span>,
                  'fork'
               )}
            </div>
            <h3 style={{ margin: '50px 0px 20px 0px', fontSize: 20, fontWeight: 500 }}>
               <i>And this just scratches the surface of what DepChecker plans to offer.</i>
            </h3>
            <Button
               type="secondary"
               size="large"
               shape="round"
               href={'https://github.com/ryanjyost/depchecker/issues/new'}
               target={'_blank'}>
               <i>Submit feature ideas</i>
            </Button>
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
                     textAlign: 'center'
                     // color: styles.blackOp(0.9)
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
                     textAlign: 'center'
                     // color: styles.blackOp(0.9)
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

   const Pricing = ({ styles }) => {
      return (
         <div
            id="pricing"
            style={{
               display: 'flex',
               alignItems: 'center',
               flexDirection: 'column',
               paddingTop: 50
            }}>
            <SectionHeader>Pricing</SectionHeader>
            <div
               style={{
                  maxWidth: 700,
                  paddingTop: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
               }}>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h1 style={{ fontSize: 60 }}>$0</h1>
                  <p style={{ fontSize: 20, lineHeight: 1.2, paddingLeft: 20 }}>
                     per <strong>public</strong> repo
                     <br /> <i>per month</i>
                  </p>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                  <div
                     style={{
                        width: 80,
                        height: 2,
                        backgroundColor: COLORS.whiteOp(0.6),
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'rotate(-45deg)'
                     }}
                  />
                  <div
                     style={{
                        width: 80,
                        height: 2,
                        backgroundColor: COLORS.whiteOp(0.6),
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        transform: 'rotate(45deg)'
                     }}
                  />
                  <h1 style={{ fontSize: 60, color: COLORS.whiteOp(0.4), marginRight: 10 }}>$3</h1>
                  <h1 style={{ fontSize: 60 }}>$0</h1>
                  <p style={{ fontSize: 20, lineHeight: 1.2, paddingLeft: 20 }}>
                     per <strong>private</strong> repo
                     <br /> <i>per month</i>
                  </p>
               </div>
               <h5 style={{ color: COLORS.blue, fontSize: 20, marginTop: 20 }}>Free beta for a limited time 🎉</h5>
            </div>
         </div>
      );
   };

   const SectionHeader = ({ id, children }) => {
      return (
         <h1
            id={id}
            style={{
               textAlign: 'center',
               fontWeight: '900',
               display: 'inline-block',
               padding: '0px 30px 5px 30px',
               // color: styles.blackOp(1),
               fontSize: 30,
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
               marginBottom: 40
               // color: 'rgba(0,0,0,0.95)'
            }}>
            {children}
         </h3>
      );
   };

   const Last = ({ styles }) => {
      return (
         <div
            style={{
               display: 'flex',
               alignItems: 'center',
               flexWrap: 'wrap',
               justifyContent: 'center'
            }}>
            <div style={{ flex: 1, padding: '40px 20px 0px 20px', textAlign: 'center' }}>
               <h1
                  style={{
                     fontSize: 40,
                     lineHeight: 1.2,
                     fontWeight: '700',
                     paddingRight: 20,
                     marginBottom: 50
                  }}>
                  It will save your team time - so give it a try!
               </h1>
               <Button
                  shape="round"
                  type="primary"
                  size="large"
                  className={'pulsingButton'}
                  href={`https://github.com/apps/${process.env.REACT_APP_GH_APP_NAME}/installations/new`}>
                  <Icon style={{ color: '#fff' }} color={'#fff'} type="github" />
                  Add DepChecker to Github
               </Button>
               {/*<h5*/}
               {/*   style={{*/}
               {/*      paddingLeft: 5,*/}
               {/*      maxWidth: 300,*/}
               {/*      opacity: 0.6*/}
               {/*   }}>*/}
               {/*   No need to provide email, payment or spare kidney for for basic version.*/}
               {/*</h5>*/}
            </div>
            {/*<div style={{ flex: 1.3, padding: 10 }}>*/}
            {/*   <BrowserPreview styles={styles} isMain>*/}
            {/*      <img src={"/depchecker-preview.png"} width="100%" />*/}
            {/*   </BrowserPreview>*/}
            {/*</div>*/}
         </div>
      );
   };

   return (
      <Root>
         <div
            style={{
               maxWidth: 1100,
               minHeight: '100vh',
               width: '100%',
               margin: 'auto'
            }}>
            <BasicHeader />
            <div style={{ padding: '0px 20px 50px 20px' }}>
               <First styles={styles} />
            </div>{' '}
            <div style={{ padding: '120px 20px 100px 20px' }}>
               <HowItWorks styles={styles} />
            </div>
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
            {/*<div style={{ padding: '200px 20px 50px 20px' }}>*/}
            {/*   <Benefits styles={styles} />*/}
            {/*</div>*/}
            {/*<div style={{ padding: '100px 20px 100px 20px' }}>*/}
            {/*   /!*<Features styles={styles} />*!/*/}
            {/*   <Features />*/}
            {/*</div>*/}
            <div style={{ padding: '60px 20px 150px 20px' }}>
               <Pricing styles={styles} />
            </div>
            {/*<div style={{ padding: '50px 20px 100px 20px' }}>*/}
            {/*   <BehindTheCurtain styles={styles} />*/}
            {/*</div>*/}
            <div style={{ padding: '50px 20px 300px 20px' }}>
               <Last styles={styles} />
            </div>
            <BasicFooter />
         </div>
      </Root>
   );
}
