import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const Portal = (props) => {
  return ReactDOM.createPortal(
    props.children,
    props.selector || document.body,
  );
}

Portal.propTypes ={
  selector: PropTypes.string
}

export default Portal;
