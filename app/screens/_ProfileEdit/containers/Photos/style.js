import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../styles';


const styles = colors => StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  contentContainerStyle: {
    padding: dimensions.indent,
  },
  // card
  image: {
    width: (dimensions.windowWidth - (dimensions.indent * 5)) / 2,
    aspectRatio: 1,
  },
  item: {
    flex: 1,
    margin: dimensions.indent,
  },
  tabBar: {
    backgroundColor: colors.backgroundSecondary,
  },
});

export default styles;
