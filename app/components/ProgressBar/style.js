import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const radius = dimensions.verticalIndent;

export default StyleSheet.create({
  indicatorRoot: {
    height: radius * 2.8,
    padding: dimensions.verticalIndent
  },
  indicatorContainer: {
    flex: 1,
    backgroundColor: colors.lightestInert,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.lightInert,
    borderRadius: radius
  },
  indicator: {
    flex: 1,
    borderRadius: radius,
    backgroundColor: colors.progress
  }
});
