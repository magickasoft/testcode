import { StyleSheet, Platform } from 'react-native';
import theme from '../../services/theme';

const colors = theme.get();

export default StyleSheet.create({
  containerButton: {
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 3,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: 'transparent',
    alignSelf: 'stretch'
  },
  buttonGradient: {
    borderRadius: 5
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 14,
    ...Platform.select({
      ios: {},
      android: {
        height: 49
      }
    })

  },
  buttonText: {
    color: colors.white,
    fontSize: 18
  }
});
