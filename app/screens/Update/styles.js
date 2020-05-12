import { Dimensions, StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrimary,
    paddingTop: 50,
  },
  image: {
    margin: 30,
    width: Dimensions.get('window').width - 100,
    height: 365 * (Dimensions.get('window').width - 100) / 651,
  },
  messages: {
    marginVertical: 15,
    textAlign: 'center',
    height: dimensions.verticalIndent * 3,
  },
  remindMe: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: colors.lightGrey,
    textDecorationLine: 'underline',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.lightGrey,
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  buttonContainer: {
    paddingHorizontal: dimensions.indent,
    width: dimensions.windowWidth * 0.85,
    backgroundColor: colors.activePrimary,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
  },
  buttonTitleStyle: {
    color: colors.white,
    fontSize: fontSizes.medium,
  },
});

export default styles;
