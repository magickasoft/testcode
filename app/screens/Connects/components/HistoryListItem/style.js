import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../styles';

const RADIUS_CIRCLE = dimensions.windowWidth / 16;

export default (colors) => StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  lineContainer: {
    width: dimensions.windowWidth / 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    width: RADIUS_CIRCLE * 1.5,
    height: RADIUS_CIRCLE * 1.5,
    borderRadius: RADIUS_CIRCLE,
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  contentContainer: {
    justifyContent: 'center',
    overflow: 'hidden',
    width: dimensions.windowWidth / 2.75
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1
  },
  line: {
    position: 'absolute',
    height: '100%',
    width: 0.4,
    flexDirection: 'column'
  },
  button: {
    backgroundColor: colors.activePrimary,
    marginRight: dimensions.indent * 2
  },
  buttonRed: {
    marginRight: dimensions.indent,
    backgroundColor: '#FFF5F5'
  },
  isVisitedColor: {
    backgroundColor: colors.activePrimary,
    borderWidth: 0
  },
  title: {
    fontWeight: '100',
    marginBottom: 5
  }
});
