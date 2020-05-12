import React from 'react';
import Animated from 'react-native-reanimated';
import T from 'prop-types';

import s from './styles';
import withTheme from '../../../../utils/enhancers/withTheme';
import { createAnimatedColor } from '../../../../utils/colors';
import { fontWeights } from '../../../../styles';

const {
  cond,
} = Animated;

const ButtonItem = ({
  title,
  theme,
  isCurrentTab,
}) => {
  const {
    activePrimary,
    dartInert,
  } = theme.colors;

  const colors = {
    backgroundSecondary: createAnimatedColor('#F5F6F7'),
    activePrimary: createAnimatedColor(activePrimary),
    dartInert: createAnimatedColor(dartInert),
  };

  return (
    <Animated.View
      style={[
        theme.s.containerButtonStyle,
        { borderBottomColor: cond(isCurrentTab, colors.activePrimary, colors.backgroundSecondary) },
      ]}
    >
      <Animated.Text
        style={[theme.s.labelStyle, {
          color: cond(isCurrentTab, colors.activePrimary, colors.dartInert),
        },
          { fontWeight: cond(isCurrentTab, fontWeights.bold, fontWeights.extraLight) },
        ]}
      >
        {title.toUpperCase()}
      </Animated.Text>
    </Animated.View>
  );
};

ButtonItem.propTypes = {
  title: T.string,
  theme: T.object,
  isCurrentTab: T.object,
};

const ButtonItemTheme = withTheme(s)(ButtonItem);

const renderItemButton = (props, tabProps) =>
  <ButtonItemTheme {...props} {...tabProps} />;


export default renderItemButton;
