import React from 'react';
import ReactNativeActionSheet from 'react-native-actionsheet';
import T from 'prop-types';

const ActionSheet = ({
  title,
  options,
  cancelButtonIndex,
  destructiveButtonIndex,
  onPress,
  setRef
}) => (
  <ReactNativeActionSheet
    ref={setRef}
    title={title}
    options={options}
    cancelButtonIndex={cancelButtonIndex}
    destructiveButtonIndex={destructiveButtonIndex}
    onPress={(index) => onPress(index, options[index])}
  />
);

ActionSheet.propTypes = {
  cancelButtonIndex: T.number,
  destructiveButtonIndex: T.number,
  onPress: T.func,
  options: T.array,
  setRef: T.func,
  title: T.string
};

export default ActionSheet;
