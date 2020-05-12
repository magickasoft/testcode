import { StyleSheet, PixelRatio } from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginVertical: 0,
    padding: 0,
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: PixelRatio.get() * StyleSheet.hairlineWidth
  }
});
