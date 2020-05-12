import { StyleSheet } from 'react-native';
import styles, { dimensions } from '../../styles/index';

export default (colors) => StyleSheet.create({
  root: {
    height: dimensions.appBarHeight,
    backgroundColor: colors.header
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimensions.indent / 2,
    paddingHorizontal: dimensions.indent,
    flex: 1
  },
  backButtonContainer: {
    paddingLeft: dimensions.indent * 0.7,
    paddingRight: dimensions.indent,
    alignItems: 'flex-start'
  },
  containerChildren: {
    flex: 1,
    flexDirection: 'row'
  },
  shadow: {
    ...StyleSheet.flatten(styles.shadow),
    marginBottom: StyleSheet.hairlineWidth
  },
  backButton: {},
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  onlyTitle: {
    justifyContent: 'center'
  },
  roundedIcon: {
    display: 'flex',
    justifyContent: 'center',
    width: 40,
    height: 40,
    overflow: 'hidden',
    margin: 5,
    padding: 7,
    backgroundColor: colors.white,
    opacity: 0.7,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ccc'
  }
});
