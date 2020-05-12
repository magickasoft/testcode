import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, fontWeights } from '../../styles';

const radius = dimensions.verticalIndent * 4.1;

export default (colors) => StyleSheet.create({
  withIcon: {
    justifyContent: 'flex-start'
  },
  titleAuth: {
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.white,
    fontSize: fontSizes.larger,
    fontFamily: 'SFProText-Bold',
    letterSpacing: 0.3
  },
  containerAuth: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    height: 41,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.transparent,
    backgroundColor: colors.purple,
    marginVertical: dimensions.indent
  },
  // filter button
  containerButtonFilter: {
    height: dimensions.verticalIndent * 3,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleButtonFilter: {
    marginHorizontal: dimensions.doubleIndent,
    fontSize: fontSizes.xSmall,
    alignItems: 'center',
    color: colors.white
  },
  // link
  containerLink: {
    justifyContent: 'center',
    marginBottom: 1
  },
  titleLink: {
    textAlign: 'center',
    color: colors.activePrimary,
    fontSize: fontSizes.xxSmall,
    fontWeight: fontWeights.semiBold
  },
  // button
  containerButton: {
    justifyContent: 'center',
    marginBottom: 1,
    borderRadius: radius / 2,
    height: radius,
    borderWidth: 1,
    borderColor: colors.transparent,
    backgroundColor: colors.transparent
  },
  titleButton: {
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: fontWeights.semiBold,
    color: colors.activePrimary,
    fontSize: fontSizes.medium
  },
  disabled: {
    backgroundColor: colors.lightGrey
  }
});
