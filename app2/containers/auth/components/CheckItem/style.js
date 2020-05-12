import { StyleSheet } from 'react-native';
import { color } from 'theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  labelView: {
    flex: 1,
    marginRight: 8
  },
  label: {
    color: color.white,
    fontSize: 17,
    lineHeight: 22
  },
  link: {
    marginLeft: 5,
    textDecorationLine: 'underline'
  },
  checkbox: {
    marginRight: 8
  }
});

export default styles;
