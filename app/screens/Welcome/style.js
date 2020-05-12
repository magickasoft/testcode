import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '../../styles';

const styles = colors => StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: dimensions.windowWidth / 8,
    paddingBottom: dimensions.windowWidth / 12,
  },
  title: {
    textAlign: 'center',
    lineHeight: dimensions.indent * 3,
    fontSize: fontSizes.xxLarge,
    color: colors.textPrimary,
  },
  text: {
    marginVertical: 20,
    lineHeight: dimensions.indent * 2,
    fontSize: fontSizes.medium,
    textAlign: 'center',
    color: colors.textInert,
  },
  buttonWelcomeContainer: {
    marginTop: 20,
    height: 50,
    borderRadius: 25,
    borderColor: colors.activePrimary,
    alignSelf: 'stretch',
  },
});

export default styles;
