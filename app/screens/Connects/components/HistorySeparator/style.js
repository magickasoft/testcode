import { StyleSheet } from 'react-native';

import { colors, dimensions } from '@styles';

const RADIUS_CIRCLE = dimensions.indent * 2;

const HEIGHT_IS_ACTIVE = dimensions.indent * 4;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: dimensions.indent / 4,
    position: 'relative',
  },
  containerIsActive: {
    flexDirection: 'row',
    height: HEIGHT_IS_ACTIVE,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  isActiveContainer: {
    height: HEIGHT_IS_ACTIVE,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    left: 0,
    width: '100%',
  },
  lineContainer: {
    width: dimensions.windowWidth / 4,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
  },
  line: {
    position: 'absolute',
    height: '100%',
    width: 0.4,
    flexDirection: 'column',
  },
  isActiveLineContainer: {
    backgroundColor: colors.lightestGrey,
  },
  littleCircle: {
    height: RADIUS_CIRCLE / 2,
    width: RADIUS_CIRCLE / 2,
    borderRadius: RADIUS_CIRCLE,
  },
});

export default styles;
