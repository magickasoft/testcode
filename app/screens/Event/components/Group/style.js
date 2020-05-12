import { StyleSheet } from 'react-native';
import { fontSizes } from '@styles';

export default (colors) => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  counter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F68C41',
    width: 50,
    height: 50,
    borderRadius: 50
  },
  label: {
    flex: 1,
    color: colors.black,
    fontSize: fontSizes.medium,
    fontWeight: '700'
  },
  value: {
    color: colors.white,
    fontSize: 9,
    lineHeight: 10,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
});
