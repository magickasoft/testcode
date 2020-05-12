import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '@styles';

const BUTTON_BACKGROUND_DISABLED_COLOR = '#cccccc';

const styles = colors => StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary,
  },
  wrapper: {
    padding: dimensions.indent,
  },
  containerInput: {
    paddingVertical: dimensions.indent / 1.5,
  },
  secondContainerInput: {
    minHeight: dimensions.indent * 4,
  },
  logo: {
    width: dimensions.verticalIndent * 30,
    height: dimensions.verticalIndent * 30,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  button: {
    color: colors.white,
    fontSize: fontSizes.medium,
  },
  containerButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.activePrimary,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginVertical: 21,
    marginHorizontal: 15,
  },
  disabled: {
    backgroundColor: BUTTON_BACKGROUND_DISABLED_COLOR,
  },
  textArea: {
    height: dimensions.indent * 8,
  },
  containerTextArea: {
    height: dimensions.indent * 10,
  },
});

export default styles;
