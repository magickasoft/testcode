import { StyleSheet } from 'react-native';
import { colors, fontSizes, dimensions } from '../../styles';

const BUTTON_BACKGROUND_COLOR = '#312d3b';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: dimensions.indent * 2,
    paddingBottom: dimensions.indent * 4,
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: dimensions.indent,
  },
  titleContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    color: colors.white,
    fontSize: fontSizes.smaller,
  },
  containerButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: BUTTON_BACKGROUND_COLOR,
    borderRadius: 15,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    margin: 4,
  },
  containerStyle: {
    borderRadius: dimensions.verticalIndent / 2,
  },
  icon: {
    color: colors.backgroundPrimary,
  },
  popover: {
    width: dimensions.windowWidth * 0.8,
    justifyContent: 'space-between',
  },
  part: {
    marginVertical: dimensions.verticalIndent * 2,
  },
  center: {
    width: '100%',
    textAlign: 'center',
  },
});

export default styles;
