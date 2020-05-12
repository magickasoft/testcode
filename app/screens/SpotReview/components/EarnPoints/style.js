import { StyleSheet } from 'react-native';
import { scalingUtils, colors, fontSizes } from '@styles';

const BUTTON_BACKGROUND_COLOR = '#312d3b';

export default StyleSheet.create({
  root: {
    backgroundColor: '#ff4081',
    height: scalingUtils.scale(135)
  },
  button: {
    color: colors.white,
    fontSize: fontSizes.smaller
  },
  containerButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: BUTTON_BACKGROUND_COLOR,
    borderRadius: 15,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    margin: 4
  }
});
