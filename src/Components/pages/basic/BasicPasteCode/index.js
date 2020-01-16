import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/monokai';
import { BasicActions } from 'Store';
import { Typography, Button } from 'antd';
import { FullScreenContainer } from 'Components/ui';
import { RouteMap } from 'Routes';
const { Title } = Typography;

const SubmitLink = styled(Link)`
   max-width: 500px;
   width: 100%;
   margin-top: 10px;
`;

const editorStyle = {
   width: '100%',
   height: 400,
   marginTop: 20,
   flex: 0.8,
   borderRadius: 3,
   zIndex: 10,
   maxWidth: 600
};

function BasicRepoUrl({ analyzePackageJSON }) {
   const [packageJSONString, updatePackageJSONString] = useState('');

   function handleChange(val) {
      updatePackageJSONString(val);
   }

   function packageJSONReady(stringToParse) {
      if (!stringToParse) {
         return false;
      }

      let parsedJSON = null;
      try {
         parsedJSON = JSON.parse(stringToParse);
      } catch (e) {
         parsedJSON = {};
      }

      return 'dependencies' in parsedJSON || 'devDependencies' in parsedJSON;
   }

   function handleSubmit() {
      let parsedJSON = null;
      try {
         parsedJSON = JSON.parse(packageJSONString);
      } catch (e) {
         parsedJSON = {};
      }
      analyzePackageJSON(parsedJSON);
   }

   return (
      <FullScreenContainer column alignItems={'center'} margin="150px 0px 0px 0px">
         <Title level={3}>
            Paste your <code>package.json</code> code below
         </Title>
         <SubmitLink to={RouteMap.BASIC_RESULTS}>
            <Button block type={'primary'} onClick={handleSubmit} disabled={!packageJSONReady(packageJSONString)}>
               Click to Analyze Dependencies
            </Button>
         </SubmitLink>
         <AceEditor
            value={packageJSONString}
            fontSize={12}
            mode="json"
            theme="monokai"
            onChange={handleChange}
            name="aceEditor"
            style={editorStyle}
         />
      </FullScreenContainer>
   );
}

const mapStateToProps = state => {
   return {};
};

const mapDispatchToProps = dispatch => {
   return {
      analyzePackageJSON: packageJSON => dispatch(BasicActions.analyzePackageJSON.request(packageJSON))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicRepoUrl);

BasicRepoUrl.defaultProps = {};

BasicRepoUrl.propTypes = {
   /** Comment prop  */
};
