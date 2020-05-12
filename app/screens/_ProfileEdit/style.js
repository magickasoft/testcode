import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';


const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: dimensions.indent,
  },
  buttonShare: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: dimensions.indent,
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: dimensions.indent / 2,
    backgroundColor: colors.activePrimary,
    marginHorizontal: dimensions.indent / 2,
  },
});

export default styles;
