import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { Button, Icon } from 'antd';
import { COLORS } from 'Styles';

const baseStyle = {
   borderWidth: 2,
   borderColor: COLORS.whiteOp(0.3),
   borderStyle: 'dashed',
   borderRadius: 3,
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

export default function FileDropzone({ onDrop, hasFile }) {
   return (
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
                     package.json is ready to analyze
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
   );
}

FileDropzone.defaultProps = {};

FileDropzone.propTypes = {
   /** Comment prop  */
};
