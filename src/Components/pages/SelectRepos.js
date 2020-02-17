import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import styled from '@emotion/styled';
import { Layout, Typography, List, Checkbox, Button, Input, Tag } from 'antd';
import { BasicActions, UserActions } from 'Store';
import { COLORS } from 'Styles';
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
   //justify-content: center;
   max-width: 500px;
   margin: auto;
   padding: 200px 30px 30px 30px;
   text-align: center;
`;

const RepoList = styled(List)`
   border: 1px solid ${COLORS.whiteOp(0.2)};
   border-radius: 3px;
   width: 100%;
   max-width: 500px;
`;

const ListItem = styled(List.Item)`
   padding: 10px 20px;
   width: 100%;
   cursor: pointer;
   border: 2px solid transparent;
   display: flex;
   align-items: center;
   justify-content: space-between;
   &:hover {
      border: 2px solid ${COLORS.primary};
      color: #fff !important;
   }
`;

const RepoName = styled(Text)`
   font-size: 18px;
`;

const NextButton = styled(Button)`
   margin: 20px;
   max-width: 500px;
`;

const SearchInput = styled(Input)`
   margin-bottom: 10px;
`;

function SelectRepos({ repos }) {
   console.log(repos);
   const [selectedRepos, updateSelectedRepos] = useState([]);
   const [search, updateSearch] = useState('');

   function toggleRepo(repoName) {
      const isSelected = selectedRepos.includes(repoName);
      if (isSelected) {
         updateSelectedRepos(selectedRepos.filter(r => r !== repoName));
      } else {
         updateSelectedRepos([...selectedRepos, ...[repoName]]);
      }
   }

   const renderNextBtn = () => {
      return (
         <NextButton block size="large" type={'primary'} disabled={!selectedRepos.length}>
            {!selectedRepos.length
               ? 'Select repos to analyze'
               : `Analyze ${selectedRepos.length} repos with DepChecker`}
         </NextButton>
      );
   };

   return (
      <Root>
         <Content>
            <Title level={2}>Select the repos you want DepChecker to analyze</Title>
            {renderNextBtn()}
            <SearchInput
               placeholder="Search for repos..."
               size="large"
               value={search}
               onChange={e => updateSearch(e.target.value)}
               allowClear
            />
            <RepoList>
               {repos
                  .filter(r => (search ? r.name.toLowerCase().includes(search.toLowerCase()) : true))
                  .map(repo => {
                     return (
                        <ListItem key={repo.id} onClick={() => toggleRepo(repo.name)}>
                           <Checkbox checked={selectedRepos.includes(repo.name)}>
                              <RepoName>{repo.name}</RepoName>
                           </Checkbox>
                           {repo.private && <Tag color="green">private</Tag>}
                        </ListItem>
                     );
                  })}
            </RepoList>
            {renderNextBtn()}
         </Content>
      </Root>
   );
}

const mapStateToProps = state => {
   return {
      repos: state.user.repos
   };
};

const mapDispatchToProps = dispatch => {
   return {
      login: code => dispatch(UserActions.login.request(code)),
      setupNewInstallation: (code, installationId) =>
         dispatch(UserActions.setupNewInstallation.request(code, installationId))
   };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectRepos));
