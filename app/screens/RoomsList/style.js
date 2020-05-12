import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';


const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: dimensions.indent,
  },
  tabBar: {
    backgroundColor: colors.backgroundSecondary,
  },

  // card
  image: {
    height: dimensions.verticalIndent * 12.5,
  },
  content: {
    height: dimensions.verticalIndent * 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 30,
    height: dimensions.verticalIndent * 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerStyleIcon: {
    height: dimensions.verticalIndent * 4,
    width: dimensions.verticalIndent * 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: dimensions.indent / 2,
    backgroundColor: colors.activePrimary,
    marginHorizontal: dimensions.indent / 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  withoutBorder: {
    borderBottomWidth: 0,
  },
});

export default styles;
