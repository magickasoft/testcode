import { StyleSheet } from 'react-native';
import { dimensions } from '../../../styles';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.lightestGrey
  },
  spinner: {
    alignItems: 'center',
    width: dimensions.windowWidth
  },
  map: {
    flex: 1,
    backgroundColor: 'grey'
    // backgroundColor: colors.transparent,
  },
  loadingContainer: {
    backgroundColor: 'grey',
    position: 'absolute',
    height: dimensions.windowHeight,
    width: dimensions.windowWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  myPosition: {
    width: dimensions.indent * 2,
    height: dimensions.indent * 2,
    backgroundColor: '#6b9bed',
    borderRadius: dimensions.indent,
    borderWidth: dimensions.indent / 5,
    borderColor: colors.white
  }
});
