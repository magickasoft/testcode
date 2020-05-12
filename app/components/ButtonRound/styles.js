import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes, fontWeights } from '../../styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrimary
  },
  title: {
    fontFamily: 'Evolventa-Bold',
    marginTop: dimensions.verticalIndent,
    textAlign: 'center',
    color: colors.activePrimary,
    fontSize: fontSizes.xSmall,
    fontWeight: fontWeights.semiBold
  }
});
