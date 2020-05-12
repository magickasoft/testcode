/* eslint-disable */
import { compose, withHandlers, withState, withPropsOnChange, } from 'recompose';
import { findNodeHandle, NativeModules } from 'react-native';

import ProfileSelector from './ProfileSelector.js';
import { withTheme } from '../../utils/enhancers';
import { dimensions } from '../../styles';
import s from './styles';

const createAnchor = (x = 0, y = 0, width = 0, height = 0) => ({ x, y, width, height });

const enhance = compose(
  withState('popoverAnchor', 'setPopoverAnchor', createAnchor()),
  withState('buttonRef', 'setButtonRef', null),
  withHandlers({
    setButton: props => e => {
      const handle = findNodeHandle(props.buttonRef);
      if (handle) {
        NativeModules.UIManager.measure(handle, (x0, y0, width, height, x, y) => {
          const newY = y + dimensions.indent;

          props.setPopoverAnchor(createAnchor(x, newY, width, height));
        });
      }
    },
  }),
  withTheme(s),
);

export default enhance(ProfileSelector);
