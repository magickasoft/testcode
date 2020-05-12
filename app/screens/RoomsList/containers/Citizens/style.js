import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../../../styles';


const styles = StyleSheet.create({
  item: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: dimensions.indent,
    backgroundColor: colors.backgroundSecondary,
  },
  avatarContainer: {
    borderColor: colors.white,
    borderWidth: 1,
    position: 'absolute',
    top: dimensions.verticalIndent * 12.5 - 25,
    right: dimensions.verticalIndent,
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
  marginRight: {
    marginRight: 5,
  },
  marginLeft: {
    marginLeft: 5,
  },
});

export default styles;
