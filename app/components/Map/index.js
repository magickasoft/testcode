import React from 'react';
import T from 'prop-types';

import Max from './Max';
import Min from './Min';

const Map = ({ type = 'max', ...props }) => ({
  max: <Max {...props} />,
  min: <Min {...props} />
}[type]);

Map.propTypes = {
  type: T.oneOfType(['min', 'max'])
};

export default Map;
