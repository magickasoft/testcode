import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '@styles';

export default (colors) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  },
  containerStyle: {
    backgroundColor: colors.transparent,
    borderBottomWidth: 0
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    color: colors.purple,
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  view: {
    borderWidth: 1,
    borderRadius: 5,
    position: 'absolute',
    borderColor: colors.purple,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10
  },
  titleBtn: {
    color: colors.white,
    fontSize: fontSizes.medium
  },
  containerBtn: {
    flex: 1,
    backgroundColor: colors.activePrimary,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 16
  },
  btn: {
    zIndex: 50,
    flexDirection: 'column',
    width: dimensions.windowWidth,
    flex: 1,
    position: 'absolute',
    bottom: 35,
    right: 0,
    left: 0
  }
});
