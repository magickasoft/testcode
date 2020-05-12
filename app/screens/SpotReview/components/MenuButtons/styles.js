import { StyleSheet } from 'react-native';
import { dimensions } from '@styles';
import isIPhoneX from '../../../../utils/isIPhoneX';

export default StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: 'silver',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: dimensions.indent,
    paddingBottom: dimensions.indent + (isIPhoneX ? 34 : 0)
  },
  rateText: {
    color: '#B7B7B7'
  }
});
