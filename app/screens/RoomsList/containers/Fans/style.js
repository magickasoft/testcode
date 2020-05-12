import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../../../styles';


const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: dimensions.indent,
    backgroundColor: colors.backgroundSecondary,
  },
  avatarContainer: {
    borderColor: colors.white,
    borderWidth: 1,
    position: 'absolute',
    top: dimensions.verticalIndent * 12.5 - 25,
    right: dimensions.verticalIndent * 3,
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
  popover: {
    width: dimensions.indent * 25,
  },
});

export default styles;
