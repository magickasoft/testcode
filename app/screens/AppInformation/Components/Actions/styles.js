import { StyleSheet } from 'react-native';
import isIPhoneX from '../../../../utils/isIPhoneX';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: isIPhoneX ? 34 : 0,
  },
  button: {
    borderRadius: 0,
    flex: 1,
  },
});

export default styles;
