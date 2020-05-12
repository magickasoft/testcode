import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeights } from '@styles';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    position: 'relative'
  },
  coinBalance: {
    top: 7.5,
    alignSelf: 'center',
    position: 'absolute',
    color: colors.white,
    fontSize: fontSizes.xxSmall,
    fontWeight: fontWeights.heavy
  }
});
