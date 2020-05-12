import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, fontWeights } from '@styles';

const radius = dimensions.verticalIndent * 5;
const radiusSubmit = dimensions.verticalIndent * 4;

const styles = colors => StyleSheet.create({
  root: {
    paddingTop: dimensions.verticalIndent,
  },
  containerSecond: {
    marginTop: dimensions.verticalIndent * 3,
  },
  avatarContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateContainerStyle: {
    marginVertical: dimensions.indent,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 2.5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: radius,
    justifyContent: 'space-around',
    paddingBottom: dimensions.verticalIndent * 4.5,
  },
  avatar: {
    borderWidth: dimensions.indent / 2,
    borderColor: colors.backgroundPrimary,
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    height: radius * 2,
    width: radius * 2,
    borderRadius: radius,
  },
  titleStyle: {
    color: colors.textPrimary,
    fontSize: fontSizes.larger,
    marginTop: 0,
  },
  question: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.semiBold,
    textAlign: 'center',
  },
  textArea: {
    fontSize: fontSizes.large,
    minHeight: 120,
    maxHeight: 120,
  },
  submitContainerStyle: {
    width: '75%',
    height: radiusSubmit,
    borderRadius: radiusSubmit / 2,
    backgroundColor: colors.activePrimary,
    alignSelf: 'center',
  },
  submitStyle: {
    color: colors.white,
    fontSize: fontSizes.medium,
  },
});

export default styles;
