import { StyleSheet } from 'react-native';
import { colors, fontWeights } from '../../styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    position: 'absolute',
    top: 15,
    right: 60,
    color: colors.white,
    fontWeight: fontWeights.bold
  },
  button: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
