import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '../../styles';

const styles = colors => StyleSheet.create({
  root: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: dimensions.windowWidth / 8,
    paddingBottom: dimensions.windowWidth / 12,
  },
  titleContainer: {
    flex: 1.5,
    justifyContent: 'flex-start',
  },
  title: {
    textAlign: 'center',
    lineHeight: dimensions.indent * 3,
    fontSize: fontSizes.large,
    color: colors.orange,
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    height: dimensions.indent * 25,
    width: dimensions.indent * 25,
  },
  textContainer: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  text: {
    lineHeight: dimensions.indent * 3,
    textAlign: 'center',
  },
  buttonGreatContainer: {
    borderColor: colors.activePrimary,
    alignSelf: 'stretch',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  buttonSkipContainer: {
    marginTop: dimensions.indent,
    borderColor: colors.transparent,
  },
});

export default styles;
