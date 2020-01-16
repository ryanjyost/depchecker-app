import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { BasicActions } from 'Store';
import { Typography, Input, Button } from 'antd';
import { FullScreenContainer } from 'Components/ui';
import { RouteMap } from 'Routes';

const { Title } = Typography;

const RepoUrlInput = styled(Input)`
   max-width: 500px;
   width: 100%;
   margin-top: 20px;
`;

const SubmitLink = styled(Link)`
   max-width: 500px;
   width: 100%;
   margin-top: 10px;
`;

function BasicRepoUrl({ analyzeRepoUrl }) {
   const [url, updateUrl] = useState('');

   function handleSubmit() {
      analyzeRepoUrl(url);
   }

   return (
      <FullScreenContainer column justifyContent={'center'} alignItems={'center'}>
         <Title level={3}>Paste a GitHub Repo URL below</Title>
         <RepoUrlInput
            placeholder={'https://github.com/ryanjyost/react-spa-starter'}
            onChange={e => updateUrl(e.target.value)}
         />
         <SubmitLink to={RouteMap.BASIC_RESULTS}>
            <Button block type={'primary'} onClick={handleSubmit} disabled={!url.includes('https://github.com/')}>
               Click to Analyze Dependencies
            </Button>
         </SubmitLink>
      </FullScreenContainer>
   );
}

const mapStateToProps = state => {
   return {};
};

const mapDispatchToProps = dispatch => {
   return {
      analyzeRepoUrl: url => dispatch(BasicActions.analyzeRepoUrl.request(url))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicRepoUrl);

BasicRepoUrl.defaultProps = {};

BasicRepoUrl.propTypes = {
   /** Comment prop  */
};
