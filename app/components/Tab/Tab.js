import React from 'react';
import T from 'prop-types';
import { pure, compose } from 'recompose';

import s from './styles';
import BaseTab from './Base';
import tabBars from './tabBars';
import { withTheme } from '../../utils/enhancers';

const Tab = ({
  type,
  theme,
  ...props
}) => {
  const { renderItemButton } = tabBars[type];
  const tabBarContainerStyle = theme.s[type];

  return (
    <BaseTab
      renderItemButton={renderItemButton}
      tabBarContainerStyle={tabBarContainerStyle}
      {...props}
    />
  );
};

Tab.propTypes = {
  theme: T.object,
  type: T.oneOf(['def', 'simple'])
};

Tab.defaultProps = {
  type: 'def'
};

export default compose(
  pure,
  withTheme(s)
)(Tab);
