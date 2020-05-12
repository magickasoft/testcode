import { StyleSheet } from 'react-native';
import { fontSizes } from '@styles';

export default StyleSheet.create({
  modalContent: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  infoView: {
    marginTop: 25,
    marginBottom: 40,
    marginHorizontal: 20
  },
  infoLabel: {
    textAlign: 'center',
    color: '#323232',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10
  },
  infoDescription: {
    textAlign: 'center',
    color: '#373737',
    fontSize: 14,
    marginBottom: 10
  },
  titleBtn: {
    color: '#646464',
    fontSize: fontSizes.medium
  },
  containerBtn: {
    borderColor: '#b8b8b8',
    backgroundColor: '#fff',
    borderRadius: 5,
    minHeight: 42,
    height: 42,
    marginVertical: 10,
    marginHorizontal: 0
  }
});
