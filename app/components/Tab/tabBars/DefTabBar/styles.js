import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights
} from '../../../../styles';

export default (colors) => StyleSheet.create({
  containerButtonStyle: {
    flex: 1,
    borderColor: colors.activePrimary,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelStyle: {
    color: colors.activePrimary,
    fontSize: fontSizes.smaller,
    fontWeight: fontWeights.semiBold
  },
  borderRight: {
    borderRightWidth: 0
  },
  copilotContainer: {
    flex: 1
  }
});
