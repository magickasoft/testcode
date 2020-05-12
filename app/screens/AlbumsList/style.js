import { StyleSheet } from 'react-native';
import { fontSizes } from '@styles';

const styles = colors => StyleSheet.create({
  root: {
    backgroundColor: colors.backgroundSecondary,
  },
  wideBtn: {
    color: colors.white,
    fontSize: fontSizes.medium,
  },
  wrapperWideBtn: {
    flex: 1,
    backgroundColor: colors.activePrimary,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginVertical: 21,
    marginHorizontal: 15,
  },
});

export default styles;
