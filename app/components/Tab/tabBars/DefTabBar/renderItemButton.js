import React from 'react';
import Animated from 'react-native-reanimated';
import T from 'prop-types';

import { CopilotStep } from '@components';

import s from './styles';
import { withTheme } from '../../../../utils/enhancers';
import { createAnimatedColor } from '../../../../utils/colors';

const { cond } = Animated;

const ButtonItem = ({
  title,
  theme,
  isCurrentTab,
  isLast,
  copilot
}) => {
  const {
    activePrimary,
    backgroundSecondary
  } = theme.colors;

  const colors = {
    activePrimary: createAnimatedColor(activePrimary),
    backgroundSecondary: createAnimatedColor(backgroundSecondary)
  };

  return (
    <CopilotStep
      stepProps={copilot}
      style={theme.s.copilotContainer}
    >
      <Animated.View
        style={[
          theme.s.containerButtonStyle,
          isLast && theme.s.borderRight,
          { backgroundColor: cond(isCurrentTab, colors.activePrimary, colors.backgroundSecondary) },
        ]}
      >
        <Animated.Text
          style={[theme.s.labelStyle, {
            color: cond(isCurrentTab, colors.backgroundSecondary, colors.activePrimary),
          }]}
        >
          {title}
        </Animated.Text>
      </Animated.View>
    </CopilotStep>
  );
};

ButtonItem.propTypes = {
  title: T.string,
  theme: T.object,
  isCurrentTab: T.object,
  isLast: T.bool,
  copilot: T.oneOfType(T.object, T.bool)
};

const ButtonItemTheme = withTheme(s)(ButtonItem);

const renderItemButton = (props, tabProps) => <ButtonItemTheme {...props} {...tabProps} />;


export default renderItemButton;
