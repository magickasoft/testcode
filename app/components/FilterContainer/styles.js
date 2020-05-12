import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

export default StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    // marginLeft: dimensions.windowWidth * 0.25,
    backgroundColor: colors.backgroundPrimary
  },
  contentContainer: {
    flex: 1,
    marginBottom: dimensions.indent * 1.5,
    marginLeft: dimensions.indent * 1.5
  },
  titleContainer: {
    paddingVertical: dimensions.indent,
    paddingRight: dimensions.indent,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconReload: {
    transform: [{ rotate: '180deg' }],
    paddingHorizontal: dimensions.indent
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
