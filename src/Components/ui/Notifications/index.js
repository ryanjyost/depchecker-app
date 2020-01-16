import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';

/**
 * Template for a functional component connected to the store
 */
function Notifications({}) {
   return null;
}

const mapStateToProps = state => {
   return {};
};

const mapDispatchToProps = dispatch => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

Notifications.defaultProps = {};

Notifications.propTypes = {
   /** Comment prop  */
};
