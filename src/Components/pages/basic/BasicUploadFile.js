import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { Typography, Input, Button, Icon } from 'antd';
import { BasicActions } from 'Store';
import { FullScreenContainer } from 'Components/ui';
import FileDropzone from 'Components/shared/FileDropzone';
import { RouteMap } from 'Routes';
import { COLORS } from 'Styles';

const { Title } = Typography;

const SubmitLink = styled(Link)`
   max-width: 500px;
   width: 100%;
   margin: 10px 0px 40px 0px;
`;

function BasicUploadFile({ packageJSON, analyzePackageJSON, readPackageJSON, clearPackageJSON }) {
   useEffect(() => {
      clearPackageJSON();
   }, []);

   function handleSubmit() {
      analyzePackageJSON(packageJSON);
   }

   function onDrop(files) {
      let formData = new FormData();
      formData.append('file', files[0]);
      readPackageJSON(formData);
   }

   const hasFile = packageJSON && 'dependencies' in packageJSON;

   return (
      <FullScreenContainer column alignItems={'center'} margin="150px 0px 0px 0px">
         <Title level={3}>
            Upload a <code>package.json</code> file
         </Title>
         <FileDropzone onDrop={onDrop} hasFile={hasFile} />
         <SubmitLink to={RouteMap.RESULTS}>
            <Button block type={'primary'} onClick={handleSubmit} disabled={!hasFile}>
               Click to Analyze Dependencies
            </Button>
         </SubmitLink>
      </FullScreenContainer>
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
      clearPackageJSON: () => dispatch(BasicActions.updatePackageJSON(null))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicUploadFile);

BasicUploadFile.defaultProps = {};

BasicUploadFile.propTypes = {
   /** Comment prop  */
};
