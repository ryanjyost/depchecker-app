import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Typography, Input, Button, Layout, Icon } from 'antd';
import { BasicHeader, BasicFooter } from 'Components/ui';
import { FileDropzone } from 'Components/shared';
import { APP_HEADER_HEIGHT, COLORS } from 'Styles';
import { RouteMap } from 'Routes';
import { BasicActions } from 'Store';
import examplePackageJSON from 'Assets/package.example';
import { getRepoNameAndOwnerFromUrl, convertJSONStringToJs } from 'Util/index';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/monokai';
const { Title, Text } = Typography;

const Root = styled.div`
   min-height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
`;

const Content = styled(Layout.Content)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-width: 1000px;
   margin: auto;
`;

const RepoAnalysisContainer = styled.div`
   background-color: ${COLORS.whiteOp(0.06)};
   width: 100%;
   padding: 30px;
   display: flex;
   align-items: stretch;
   border: 1px solid ${COLORS.whiteOp(0.1)};
   border-radius: 5px;
   flex-wrap: wrap;
`;

const RepoUrlInput = styled(Input)`
   max-width: 500px;
   width: 100%;
   margin-top: 5px;
   margin-bottom: 50px;
`;

const RepoUrlLabel = styled(Text)`
   margin-top: 30px;
`;

const ExampleLink = styled(Link)`
   margin-top: 10px;
   opacity: 0.9;
`;

const LeftSideContainer = styled.div`
   display: flex;
   align-items: stretch;
   flex: 1;
`;

const ReadyContainer = styled.div`
   border-width: 2px;
   border-color: ${COLORS.whiteOp(0.3)};
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   i {
      font-size: 40px;
      color: ${COLORS.blue};
      margin-bottom: 20px;
   }

   h4 {
      text-align: center;
   }

   button {
      margin-top: 20px;
      font-weight: bold;
   }

   a {
      width: 90%;
      max-width: 200px;
      text-align: center;
      margin-top: 10px;
   }
`;

const PasteCodeContainer = styled.div`
   height: 100%;
   min-height: 900px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   h3 {
      text-align: center;
      width: 100%;
      max-width: 500px;
   }

   a {
      width: 100%;
      text-align: center;
   }
`;

const RepoAnalysisInfo = styled.div`
   flex: 0.8;
   padding: 30px 20px 20px 40px;
   display: flex;
   flex-direction: column;
   justify-content: center;

   h2 {
      font-weight: 800;
   }

   h4 {
      font-weight: 400;
      margin-bottom: 10px;
      font-size: 18px;
      opacity: 0.7;
   }

   hr {
      width: 100%;
      opacity: 0.1;
      margin: 20px 0px 40px 0px;
   }

   a {
      margin-top: 20px;
   }
`;

const InfoText = styled.div`
   margin-bottom: 10px;
   line-height: 2;
   font-size: 15px;
   color: ${COLORS.whiteOp(0.9)};
   font-weight: 500;
   strong {
      font-weight: 700;
   }
`;

const editorStyle = {
   height: 600,
   marginTop: 20,
   flex: 0.8,
   borderRadius: 3,
   zIndex: 10,
   width: 600
};

function FullAnalysisOption({ packageJSON, analyzePackageJSON, readPackageJSON, clearPackageJSON, updatePackageJSON }) {
   const [url, updateUrl] = useState('');
   const [pastingCode, togglePastingCode] = useState(false);
   const [packageJSONString, updatePackageJSONString] = useState('');
   const hasFile = packageJSON && 'dependencies' in packageJSON;

   function clearEverything() {
      updateUrl('');
      clearPackageJSON();
      updatePackageJSONString('');
      togglePastingCode(false);
   }

   useEffect(() => {
      clearEverything();
   }, []);

   function handleUrlChange(newUrl) {
      updateUrl(newUrl);
      const [owner, repo] = getRepoNameAndOwnerFromUrl(newUrl);
      if (owner && repo) {
         let formData = new FormData();
         formData.append('url', newUrl);
         readPackageJSON(formData);
      }
   }

   function packageJSONReady(stringToParse) {
      if (!stringToParse) {
         return false;
      }

      let parsedJSON = convertJSONStringToJs(stringToParse);
      return 'dependencies' in parsedJSON || 'devDependencies' in parsedJSON;
   }

   function handleEditorChange(val) {
      updatePackageJSONString(val);

      if (packageJSONReady(val)) {
         updatePackageJSON(convertJSONStringToJs(val));
      } else {
         updatePackageJSON({});
      }
   }

   function handleSubmit() {
      analyzePackageJSON(packageJSON);
   }

   function onDrop(files) {
      let formData = new FormData();
      formData.append('file', files[0]);
      readPackageJSON(formData);
   }

   function startExample() {
      analyzePackageJSON(examplePackageJSON);
   }

   const renderReadToAnalyze = () => {
      const [owner, repo] = getRepoNameAndOwnerFromUrl(url);
      let text = null;
      if (owner && repo) {
         text = `for ${owner}/${repo}`;
      } else if (packageJSON.name) {
         text = `for ${packageJSON.name}`;
      }

      return (
         <ReadyContainer>
            <Icon type="experiment" />
            <Title level={4}>Dependencies are ready to analyze {text}</Title>
            <Link id="basic_analyzeButton" to={RouteMap.BASIC_RESULTS}>
               <Button block type={'primary'} onClick={handleSubmit}>
                  Analyze
               </Button>
            </Link>
            <a onClick={clearEverything}>Click to start over</a>
         </ReadyContainer>
      );
   };

   const renderPasteCode = () => {
      return (
         <PasteCodeContainer>
            <Title level={3}>
               {hasFile ? (
                  <Link id="pasteCode_analyzeButton" to={RouteMap.BASIC_RESULTS}>
                     <Button block type={'primary'} size="large" onClick={handleSubmit}>
                        Analyze
                     </Button>
                  </Link>
               ) : (
                  <span>
                     Paste your <code>package.json</code> code below
                  </span>
               )}
            </Title>
            <a onClick={clearEverything}>Click to start over</a>
            <AceEditor
               value={packageJSONString}
               fontSize={12}
               mode="json"
               theme="monokai"
               onChange={handleEditorChange}
               name="aceEditor"
               style={editorStyle}
            />
         </PasteCodeContainer>
      );
   };

   const renderInfo = () => {
      return (
         <RepoAnalysisInfo>
            <div>
               <Title level={2}>Maintain JavaScript projects?</Title>
               <InfoText>
                  DepChecker is a free tool that makes it easy to analyze and monitor your npm dependencies. So you can
                  discover potential issues early on and more confidently maintain your code.
               </InfoText>
            </div>
            <Link to={RouteMap.LANDING_PREMIUM || '/'}>
               <Button shape="round">
                  Learn about <strong>&nbsp;DepChecker Pro</strong>
               </Button>
            </Link>
         </RepoAnalysisInfo>
      );
   };

   return (
      <Root theme="dark">
         <BasicHeader />
         <Content>
            {pastingCode ? (
               renderPasteCode()
            ) : (
               <RepoAnalysisContainer>
                  <LeftSideContainer>
                     {hasFile ? (
                        renderReadToAnalyze()
                     ) : (
                        <FileDropzone onDrop={onDrop} hasFile={hasFile}>
                           <RepoUrlLabel>Paste a link to a repository</RepoUrlLabel>
                           <RepoUrlInput
                              id="basic_repoUrlInput"
                              value={url}
                              placeholder={'https://github.com/ryanjyost/react-spa-starter'}
                              onChange={e => handleUrlChange(e.target.value)}
                           />
                           <Button
                              id="basic_pasteCodeButton"
                              type="default"
                              shape="round"
                              block
                              onClick={() => togglePastingCode(true)}>
                              Click here to paste the code directly
                           </Button>
                           <ExampleLink to={RouteMap.BASIC_RESULTS} onClick={startExample}>
                              Try an example
                           </ExampleLink>
                        </FileDropzone>
                     )}
                  </LeftSideContainer>

                  {renderInfo()}
               </RepoAnalysisContainer>
            )}
         </Content>
         <BasicFooter />
      </Root>
   );
}

const mapStateToProps = state => {
   return {
      packageJSON: state.basic.packageJSON
   };
};

const mapDispatchToProps = dispatch => {
   return {
      analyzePackageJSON: data => dispatch(BasicActions.analyzePackageJSON.request(data)),
      readPackageJSON: formData => dispatch(BasicActions.readPackageJSON.request(formData)),
      updatePackageJSON: packageJSON => dispatch(BasicActions.updatePackageJSON(packageJSON)),
      clearPackageJSON: () => dispatch(BasicActions.updatePackageJSON(null))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullAnalysisOption);
