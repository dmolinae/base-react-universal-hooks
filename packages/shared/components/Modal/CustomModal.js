import React, { Component } from "react";
import { Modal } from "react-native";
import PropTypes from "prop-types";

const CustomModal = (props) => {
  const { animationType, transparent, visible, onRequestClose } = props;
  const modalProps = {
    animationType,
    transparent,
    visible,
    onRequestClose
  }

  return (
    <Modal {...modalProps}>
      {props.children}
    </Modal>
  )
}

CustomModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  animationType: PropTypes.string,
  transparent: PropTypes.bool
};
export default CustomModal;
