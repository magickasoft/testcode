import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboardHOC = (Comp) => {
  const EnhancedComponent = ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );

  EnhancedComponent.propTypes = {
    children: PropTypes.node.isRequired
  };

  return EnhancedComponent;
};

export default DismissKeyboardHOC;
