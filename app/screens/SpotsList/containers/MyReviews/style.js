import { StyleSheet } from 'react-native';
import { dimensions } from '../../../../styles';
import { NAV_BAR_HEIGHT } from '../../constants';
import { platform } from '../../../../constants';

const styles = colors => StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary,
  },
  contentContainerStyle: {
    padding: dimensions.indent,
    backgroundColor: colors.backgroundSecondary,
    paddingTop: platform.ios ? 0 : NAV_BAR_HEIGHT,
  },
  flatList: {
    marginBottom: dimensions.verticalIndent * 17,
  },
});

export default styles;
