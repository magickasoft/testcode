import { StyleSheet } from 'react-native';

const styles = colors => StyleSheet.create({
  root: {
    backgroundColor: colors.backgroundSecondary,
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
