import { StyleSheet } from 'react-native';
import { dimensions, colors } from '../../../../styles';
import { moderateScale } from '../../../../styles/scalingUtils';

const { indent } = dimensions;

export default StyleSheet.create({
  item: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    margin: indent * 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedItem: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(74, 74, 74, 0.4)'
  },
  icon: {
    height: moderateScale(15),
    width: moderateScale(15),
    color: colors.white,
    textAlign: 'center'
  },
  containerStyle: {
    justifyContent: 'center'
  }
});
