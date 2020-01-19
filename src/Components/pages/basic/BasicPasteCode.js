import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import { convertJSONStringToJs } from 'Util/index';
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

function BasicRepoUrl({ analyzePackageJSON, clearPackageJSON }) {
   const [packageJSONString, updatePackageJSONString] = useState('');

   useEffect(() => {
      clearPackageJSON();
   }, []);

   function handleChange(val) {
      updatePackageJSONString(val);
   }

   function packageJSONReady(stringToParse) {
      if (!stringToParse) {
         return false;
      }

      let parsedJSON = convertJSONStringToJs(packageJSONString);
      console.log(stringToParse);
      console.log(parsedJSON);
      return 'dependencies' in parsedJSON || 'devDependencies' in parsedJSON;
   }

   function handleSubmit() {
      analyzePackageJSON(convertJSONStringToJs(packageJSONString));
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

const mapDispatchToProps = dispatch => {
   return {
      analyzePackageJSON: packageJSON => dispatch(BasicActions.analyzePackageJSON.request(packageJSON)),
      clearPackageJSON: () => dispatch(BasicActions.updatePackageJSON(null))
   };
};

export default connect(null, mapDispatchToProps)(BasicRepoUrl);

BasicRepoUrl.defaultProps = {};

BasicRepoUrl.propTypes = {
   analyzePackageJSON: PropTypes.func
};
