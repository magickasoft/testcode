import { StyleSheet } from 'react-native';

import { fontSizes } from '@styles';

export default StyleSheet.create({
  codeInput: {
    borderColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    paddingHorizontal: 25,
  },
  promoText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: fontSizes.xxLarge,
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
  },
  pullToBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  keyboardView: {
    flex: 1,
  },
});
