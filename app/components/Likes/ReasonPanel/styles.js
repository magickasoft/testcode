import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomLeftRadius: dimensions.indent,
    borderBottomRightRadius: dimensions.indent,
    paddingVertical: dimensions.indent,
    paddingLeft: dimensions.indent
  },
  options: {
    flexDirection: 'row'
  },
  option: {
    backgroundColor: colors.white,
    paddingHorizontal: dimensions.halfIndent,
    paddingVertical: dimensions.halfIndent,
    marginRight: dimensions.indent,
    borderRadius: dimensions.halfIndent
  },
  optionText: {
    fontSize: fontSizes.medium
  },
  closeButton: {
    marginRight: dimensions.indent
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -30,
    paddingVertical: dimensions.halfIndent
  },
  text: {
    color: colors.white
  }
});
