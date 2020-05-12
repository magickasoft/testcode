import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../styles';
import colors from '../../../../styles/colors';
import fontSizes from '../../../../styles/fontSizes';

const BUTTON_BACKGROUND_COLOR = '#312d3b';

const MARGIN_HORIZONTAL = dimensions.indent * 2;

const styles = StyleSheet.create({
  imageContainer: {
    height: dimensions.indent * 20,
    backgroundColor: 'red',
  },
  itemStyle: {
    margin: dimensions.indent,
  },
  content: {
    margin: dimensions.indent,
    marginHorizontal: MARGIN_HORIZONTAL,
  },
  aboutMe: {
    marginVertical: dimensions.indent,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: dimensions.windowWidth,
  },
  button: {
    color: colors.white,
    fontSize: fontSizes.smaller,
  },
  containerButton: {
    flex: 1,
    backgroundColor: BUTTON_BACKGROUND_COLOR,
    borderRadius: 15,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    margin: 4,
  },
});

export default styles;
