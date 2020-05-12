import { Platform, StyleSheet } from 'react-native';
import { dimensions, fontSizes, fontWeights } from '../../styles';

const radius = dimensions.verticalIndent * 5;
const radiusSocial = dimensions.verticalIndent * 3;
const radiusSubmit = dimensions.verticalIndent * 4;


const shadow = Platform.select({
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
    elevation: 30,
  },
});


const styles = colors => StyleSheet.create({
  root: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: dimensions.verticalIndent * 6.5,
    paddingBottom: dimensions.verticalIndent * 10.5,
  },
  shadow,
  button: {
    height: radius * 1.5,
    width: radius * 1.5,
    borderRadius: radius,
  },
  titleStyle: {
    color: colors.textPrimary,
    fontSize: fontSizes.larger,
    marginTop: 0,
  },
  shareContainer: {
    height: '40%',
    width: '55%',
  },
  shareContainerSecond: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: dimensions.indent * 2,
  },
  textContainer: {
    height: '15%',
    marginTop: dimensions.verticalIndent * 6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSubmitted: {
    color: colors.black,
    fontWeight: fontWeights.bold,
  },
  textShare: {

  },

  // icons
  iconContainerStyle: {
    height: radiusSocial * 1.5,
    width: radiusSocial * 1.5,
    borderRadius: radiusSocial,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookContainerStyle: {
    backgroundColor: colors.facebook,
  },
  twitterContainerStyle: {
    backgroundColor: colors.twitter,
  },

  // button
  doneContainerStyle: {
    width: '75%',
    height: radiusSubmit,
    marginBottom: dimensions.indent * 2,
    borderRadius: radiusSubmit / 2,
    borderWidth: 1,
    borderColor: colors.activePrimary,
    backgroundColor: colors.activePrimary,
    alignSelf: 'center',
  },
  doneStyle: {
    color: colors.white,
    fontSize: fontSizes.medium,
  },
});

export default styles;
