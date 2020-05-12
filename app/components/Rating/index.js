/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import { pure, compose } from 'recompose';

import { withTheme } from '@utils/enhancers';

import RatingDefault from'./Rating';
import RatingSquare from'./RatingSquare';
import RatingHeartsEmpty from'./RatingHeartsEmpty';

const Rating = ({ type = 'default', ...props }) => ({
  'default': <RatingDefault {...props}/>,
  'square': <RatingSquare {...props}/>,
  'heartEmpty': <RatingHeartsEmpty {...props}/>,
}[type]);

Rating.propTypes = {
  type: T.oneOfType([
    'default',
    'square',
    'heartEmpty',
  ]),
};

export default compose(
  pure,
  withTheme(),
)(Rating);
