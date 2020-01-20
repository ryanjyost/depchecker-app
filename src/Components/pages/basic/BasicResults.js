import React, { useEffect, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { Typography, message } from 'antd';
import { DependencyTable, AnalysisSummary } from 'Components/shared';
import { BasicActions } from 'Store';
import BasicHeader from 'Components/ui/BasicHeader';
import { COLORS } from 'Styles';
const { Title } = Typography;

const Root = styled.div`
   
`;

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 2rem 2rem 2rem 2rem;
 
   min-height: 100vh;
   min-width: 100%;
   overflow: auto;
`;

const SectionTitle = styled(Title)`
   margin-bottom: 20px !important;
   font-weight: 500 !important;
   border-bottom: 3px solid ${COLORS.whiteOp(0.2)};
   padding-bottom: 8px;
`;

function BasicResults({ dependencies, summary, packageJSON, fetching, match, analyzeRepoUrl }) {
   const MESSAGE_KEY = 'BASIC_RESULTS_PROGRESS';
   const numDepsInRepo = useMemo(() => {
      if (!packageJSON) return null;
      const devDeps = packageJSON.devDependencies ? Object.keys(packageJSON.devDependencies) : [];
      const deps = packageJSON.dependencies ? Object.keys(packageJSON.dependencies) : [];
      return devDeps.length + deps.length;
   }, [packageJSON]);

   useEffect(() => {
      const {
         params: { owner, repo }
      } = match;
      const repoUrl = `https://github.com/${owner}/${repo}`;

      console.log('pakage', packageJSON)
      if (packageJSON && packageJSON.name && packageJSON.name === repo) {
         return null;
      }

      if (owner && repo) {
         analyzeRepoUrl(`https://github.com/${owner}/${repo}`);
      }
   }, []);

   //show messages as deps are being analyzed
   useEffect(() => {
      if (fetching) {
         message.loading({
            content: !dependencies.length
               ? 'Starting analysis...'
               : dependencies.length < numDepsInRepo
               ? `${dependencies.length} of ${numDepsInRepo} deps analyzed`
               : `Summarizing analysis...`,
            key: MESSAGE_KEY,
            duration: dependencies.length >= numDepsInRepo ? 0.25 : 0
         });
      }
   }, [dependencies]);

   // show final success message when all done
   useEffect(() => {
      if (summary) {
         message.success({
            content: 'Dependency analysis completed!',
            duration: 2
         });
      }
   }, [summary]);

   return (
      <Root>
         <BasicHeader />
         <MainContainer>
            <SectionTitle level={3}>
               <strong>{packageJSON ? `${packageJSON.name}` : null}</strong>
            </SectionTitle>
            <AnalysisSummary data={summary} />
            <DependencyTable dependencies={dependencies} />
         </MainContainer>
      </Root>
   );
}

const mapStateToProps = state => {
   return state.basic;
};

const mapDispatchToProps = dispatch => {
   return {
      analyzeRepoUrl: url => dispatch(BasicActions.analyzeRepoUrl.request(url))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BasicResults));

BasicResults.defaultProps = {};

BasicResults.propTypes = {
   /** Comment prop  */
};
