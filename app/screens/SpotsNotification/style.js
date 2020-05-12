import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, fontWeights } from '../../styles';

const radius = dimensions.verticalIndent * 5;
const radiusSubmit = dimensions.verticalIndent * 4;

const styles = colors => StyleSheet.create({
  root: {
    backgroundColor: colors.backgroundSecondary,
  },
  content: {
    paddingTop: dimensions.verticalIndent,
  },
  containerSecond: {
    marginTop: dimensions.verticalIndent,
  },
  avatarContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateContainerStyle: {
    marginVertical: dimensions.indent,
    justifyContent: 'center',
    paddingBottom: 20,
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
    height: dimensions.windowHeight * 0.2,
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
