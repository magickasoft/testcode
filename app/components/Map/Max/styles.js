import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../../styles';

const clusterRadius = dimensions.indent * 1.5;

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'grey'
  },
  map: {
    flex: 1
  },
  spinner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    backgroundColor: 'grey',
    position: 'absolute',
    height: dimensions.windowHeight,
    width: dimensions.windowWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  myPostition: {
    width: dimensions.indent * 2,
    height: dimensions.indent * 2,
    backgroundColor: '#6b9bed',
    borderRadius: dimensions.indent,
    borderWidth: dimensions.indent / 5,
    borderColor: colors.white
  },

  // clustering
  clusterContainer: {
    backgroundColor: colors.activeSecondary,
    height: clusterRadius * 2,
    width: clusterRadius * 2,
    borderRadius: clusterRadius,
    justifyContent: 'center',
    alignItems: 'center'
  },
  clusterBorder: {
    backgroundColor: colors.activeSecondaryOpacity,
    height: clusterRadius * 2.6,
    width: clusterRadius * 2.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: clusterRadius * 1.3
  },
  clusterText: {
    color: colors.backgroundPrimary
  }
});
