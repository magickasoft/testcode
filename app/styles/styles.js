import { Platform, StyleSheet } from 'react-native';
// import { colors} from './index';
import { indent, letterSpacing, halfIndent } from './dimensions';
import themes from './themes';

const colors = themes[1];

const bigShadow = Platform.select({
  ios: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: {
      height: 8,
      width: 0,
    },
  },
  android: {
    elevation: 25,
  },
});

const shadowRound = Platform.select({
  ios: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  android: {
    elevation: 50,
  },
});

const shadow = Platform.select({
  ios: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
  },
  android: {
    elevation: 2,
  },
});

export default StyleSheet.create({
  fillAll: {
    flex: 1,
  },
  highlighted: {
    backgroundColor: colors.yellow,
    paddingHorizontal: indent,
    paddingVertical: 1,
    borderRadius: 4,
  },
  border: {
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
  },
  borderLeft: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderLeftColor: colors.border,
  },
  borderRight: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: colors.border,
  },
  bigShadow,
  shadowRound,
  shadow,
  warningText: {
    color: colors.warning,
  },
  letterSpacing: {
    letterSpacing,
  },
  listItem: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: 3,
    marginTop: halfIndent,
    marginLeft: indent,
    marginRight: indent,
    marginBottom: halfIndent,
    ...bigShadow,
  },
  card: {
    flex: 1,
    padding: indent * 1.5,
  },
  dropDown: {
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
    },
    elevation: 2,
  },
  backgroundColor: {
    backgroundColor: colors.primary,
  },
  opacity: {
    backgroundColor: colors.opacity,
  },
  marginLeft: {
    marginLeft: indent,
  },
  marginVerticalDouble: {
    marginVertical: indent * 2,
  },
  marginVertical3x: {
    marginVertical: indent * 3,
  },
  marginBottom: {
    marginVertical: indent,
  },
});
