import { StyleSheet } from 'react-native';
import { colors } from '../../styles/index';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.inert,
    overflow: 'hidden',
  },
  img: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
  absolute: {
    position: 'absolute',
  },
  onlineIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#00CC00',
    width: 24,
    height: 24,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
});
