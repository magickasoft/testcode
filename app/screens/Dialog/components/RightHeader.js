import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../../components';

const LeftHeader = ({ onPress }) => (
  <Icon
    name="dots"
    onPress={onPress}
    size={30}
  />
);

LeftHeader.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default LeftHeader;
