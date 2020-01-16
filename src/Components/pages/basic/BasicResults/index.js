import React, { useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { Typography, message } from 'antd';
import { DependencyTable, AnalysisSummary } from 'Components/shared';
const { Title } = Typography;

const Root = styled.div`
   display: flex;
   flex-direction: column;
   padding: 2rem;
   background-color: #fff;
   min-height: 100vh;
   min-width: 100%;
   overflow: auto;
`;

const SectionTitle = styled(Title)`
   margin-bottom: 20px !important;
   font-weight: 500 !important;
`;

function BasicResults({ dependencies, summary, packageJSON, fetching }) {
   const MESSAGE_KEY = 'BASIC_RESULTS_PROGRESS';
   const numDepsInRepo = useMemo(() => {
      if (!packageJSON) return null;
      const devDeps = packageJSON.devDependencies ? Object.keys(packageJSON.devDependencies) : [];
      const deps = packageJSON.dependencies ? Object.keys(packageJSON.dependencies) : [];
      return devDeps.length + deps.length;
   }, [packageJSON]);

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
         <SectionTitle level={3}>
            Dependency Report {packageJSON ? `for` : null} <strong>{packageJSON ? `${packageJSON.name}` : null}</strong>
         </SectionTitle>
         <AnalysisSummary data={summary} />
         <DependencyTable dependencies={dependencies} />
      </Root>
   );
}

const mapStateToProps = state => {
   return state.basic;
};

export default connect(mapStateToProps, null)(BasicResults);

BasicResults.defaultProps = {};

BasicResults.propTypes = {
   /** Comment prop  */
};
