/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import { StyleSheet, StatusBar as Bar } from 'react-native';

import { View } from "react-native";
import { dimensions } from '../../styles';
import { platform } from '../../constants';
import { withTheme } from '../../utils/enhancers';
import { colors } from '../Alert/styles'

const StatusBar = ({
  backgroundColor,
  drawUnderNavBar,
  theme: {
    s,
  },
}) => (
    <View
        style={[
          s.statusBar,
         { backgroundColor },
        ]}
    >
      {platform.android && (
        <Bar
          backgroundColor={colors.transparent}
          translucent
        />
      )}
    </View>
);

const style = colors => StyleSheet.create({
    statusBar: {
      backgroundColor: colors.statusBar,
      height: dimensions.statusBarHeight,
    },
});

StatusBar.propTypes = {
  backgroundColor: T.oneOfType([
    T.string,
    T.func,
  ]),
  barStyle: T.string,
  drawUnderNavBar: T.bool,
};

export default withTheme(style)(StatusBar);
