import { StyleSheet } from 'react-native';
import {
  fontSizes,
  fontWeights,
} from '../../../../styles';

const styles = colors => StyleSheet.create({
  containerButtonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.backgroundSecondary,
  },
  labelStyle: {
    fontWeight: fontWeights.extraLight,
    textAlign: 'center',
    color: colors.dartInert,
    fontSize: fontSizes.small,
  },
  currentLabelStyle: {
    color: colors.dartInert,
    fontSize: fontSizes.smaller,
    fontWeight: fontWeights.extraLight,
    textAlign: 'center',
  },
});

export default styles;
