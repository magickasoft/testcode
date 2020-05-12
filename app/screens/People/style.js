import { StyleSheet } from 'react-native';

const styles = colors => StyleSheet.create({
  root: {
    backgroundColor: colors.backgroundSecondary,
  },
  tabBar: {
    backgroundColor: colors.backgroundSecondary,
  },
  withoutBorder: {
    borderBottomWidth: 0,
  },
});

export default styles;
