import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import ComponentView from './ComponentView';

const enhance = compose(
  withState('refMarker', 'setRefMarker', React.createRef()),
  withState('isPressedMarker', 'setPressedMarker', false),
  withHandlers({
    hideCallout: ({ refMarker, setPressedMarker }) => () => {
      refMarker && refMarker.hideCallout && refMarker.hideCallout();
      setPressedMarker(false);
    },
    showCallout: ({ refMarker, setPressedMarker }) => () => {
      refMarker && refMarker.showCallout && refMarker.showCallout();
      setPressedMarker(true);
    }
  }),
  withHandlers({
    onPressMarker: ({ isPressedMarker, hideCallout, showCallout, onPressMarker }) => (location) => {
      isPressedMarker ? hideCallout() : showCallout();
      onPressMarker && onPressMarker(location);
    }
  }),
  withHandlers({
    onChangeRef: (props) => (ref) => {
      ref && ref.showCallout && ref.showCallout();
      ref && props.setRefMarker(ref);
      props.setPressedMarker(true);
    }
  }),
);

export default enhance(ComponentView);
