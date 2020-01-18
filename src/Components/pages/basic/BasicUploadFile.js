import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { Typography, Input, Button, Icon } from 'antd';
import { BasicActions } from 'Store';
import { FullScreenContainer } from 'Components/ui';
import { RouteMap } from 'Routes';
import { COLORS } from 'Styles';

const { Title } = Typography;

const SubmitLink = styled(Link)`
   max-width: 500px;
   width: 100%;
   margin: 10px 0px 40px 0px;
`;

const baseStyle = {
   borderWidth: 2,
   borderColor: COLORS.blackOp(0.1),
   borderStyle: 'dashed',
   borderRadius: 3,
   backgroundColor: '#fff',
   padding: '20px 10px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
   maxWidth: 500,
   margin: '20px 0px',
   height: 200
};
const activeStyle = {
   borderStyle: 'solid',
   borderColor: COLORS.primaryOp(0.8),
   backgroundColor: '#fff'
};
const rejectStyle = {
   borderStyle: 'solid',
   borderColor: COLORS.redOp(0.8),
   backgroundColor: COLORS.redOp(0.05)
};
const hasFileStyle = {
   borderStyle: 'solid',
   borderColor: COLORS.primaryOp(0.5),
   backgroundColor: '#fff',
   cursor: 'pointer'
};

function BasicUploadFile({ packageJSON, analyzePackageJSON, readPackageJSON }) {
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
         <Dropzone onDrop={onDrop} accept="application/json" noClick={!hasFile}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject, open }) => {
               let styles = { ...baseStyle };
               styles = hasFile ? { ...styles, ...hasFileStyle } : styles;
               styles = isDragActive ? { ...styles, ...activeStyle } : styles;
               styles = isDragReject ? { ...styles, ...rejectStyle } : styles;

               let text = 'Drag your file here or';
               if (isDragActive && !isDragReject) {
                  text = <strong>{`Drop it like it's hot`}</strong>;
               } else if (hasFile) {
                  text = (
                     <span>
                        Dependencies for <strong>{packageJSON.name}</strong> are ready to analyze
                     </span>
                  );
               } else if (isDragReject) {
                  text = (
                     <span>
                        Please upload a <strong>package.json</strong> file
                     </span>
                  );
               }

               return (
                  <div {...getRootProps()} style={styles} id={'dropzone'}>
                     <input {...getInputProps()} />

                     {isDragReject ? (
                        <Icon
                           style={{
                              fontSize: 40,
                              color: COLORS.red
                           }}
                           type="stop"
                        />
                     ) : (
                        <Icon
                           style={{
                              fontSize: 40,
                              color: hasFile && !isDragActive ? COLORS.primaryOp(1) : COLORS.primaryOp(0.7)
                           }}
                           type={isDragActive ? 'fire' : hasFile ? 'check-circle' : 'cloud-upload'}
                        />
                     )}

                     <div
                        style={{
                           display: 'flex',
                           alignItems: 'center',
                           marginTop: 10
                        }}>
                        <div
                           style={{
                              marginRight: 10,
                              fontSize: 16
                           }}>
                           {text}
                        </div>
                        {isDragActive || hasFile ? null : (
                           <Button id={'browseFiles'} size={'small'} type="primary" onClick={() => open()}>
                              browse
                           </Button>
                        )}
                     </div>
                  </div>
               );
            }}
         </Dropzone>
         <SubmitLink to={RouteMap.BASIC_RESULTS}>
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
      readPackageJSON: formData => dispatch(BasicActions.readPackageJSON.request(formData))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicUploadFile);

BasicUploadFile.defaultProps = {};

BasicUploadFile.propTypes = {
   /** Comment prop  */
};
