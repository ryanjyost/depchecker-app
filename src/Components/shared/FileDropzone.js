import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { Button, Icon } from 'antd';
import { COLORS } from 'Styles';

const baseStyle = {
   borderWidth: 2,
   borderColor: COLORS.whiteOp(0.3),
   borderStyle: 'dotted',
   borderRadius: 3,
   padding: '30px 45px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   // width: '100%',
   // maxWidth: 500,
   width: '100%'
   // margin: '20px 0px',
   // height: 200
};
const activeStyle = {
   borderStyle: 'solid',
   borderColor: COLORS.primaryOp(0.8)
};
const rejectStyle = {
   borderStyle: 'solid',
   borderColor: COLORS.redOp(0.8),
   backgroundColor: COLORS.redOp(0.05)
};
const hasFileStyle = {
   borderStyle: 'solid',
   borderColor: COLORS.primaryOp(0.5),
   cursor: 'pointer'
};

export default function FileDropzone({ onDrop, hasFile, children }) {
   return (
      <Dropzone onDrop={onDrop} accept="application/json" noClick={!hasFile}>
         {({ getRootProps, getInputProps, isDragActive, isDragReject, open }) => {
            let styles = { ...baseStyle };
            styles = hasFile ? { ...styles, ...hasFileStyle } : styles;
            styles = isDragActive ? { ...styles, ...activeStyle } : styles;
            styles = isDragReject ? { ...styles, ...rejectStyle } : styles;

            let text = (
               <span>
                  Drag & drop your <code style={{ fontSize: 12 }}>package.json</code>
               </span>
            );
            if (isDragActive && !isDragReject) {
               text = <strong>{`Drop it like it's hot`}</strong>;
            } else if (hasFile) {
               text = <span>package.json is ready to analyze</span>;
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
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 20
                     }}>
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
                           marginRight: 10,
                           marginBottom: 15,
                           marginTop: 15,
                           fontSize: 14,
                           opacity: 0.8,
                           display: 'flex',
                           flexWrap: 'wrap',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}>
                        {text}{' '}
                     </div>
                     {isDragActive || hasFile ? null : (
                        <Button
                           id={'browseFiles'}
                           type="primary"
                           size="small"
                           onClick={() => open()}
                           style={{ padding: '0px 10px', marginBottom: 20 }}>
                           Browse your files
                        </Button>
                     )}
                  </div>
                  {isDragActive || hasFile || !children ? null : children}
               </div>
            );
         }}
      </Dropzone>
   );
}

FileDropzone.defaultProps = {};

FileDropzone.propTypes = {
   /** Comment prop  */
};
