import React from 'react';
import T from 'prop-types';

import ComponentView from './ComponentView';
import Container from './Container';

const Marker = ({ openCallout = true, ...props }) => (
  openCallout
    ? <Container {...props} />
    : <ComponentView {...props} />
);

Marker.propTypes = {
  openCallout: T.bool
};

export default Marker;
