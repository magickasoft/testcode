import { StyleSheet } from 'react-native';
import { isIphoneX } from '@utils/helpers/ui';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TDPickerWrapper: {
    borderColor: '#cdcdcd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    shadowColor: '#cdcdcd',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 1,
    shadowOpacity: 1
  },
  controlsWrapper: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingBottom: isIphoneX() ? 16 : 0
  },
  flex: {
    flex: 1
  },
  selectedWrapper: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 20
  },
  time: {
    fontSize: 36,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 5
  },
  date: {
    color: '#000',
    fontSize: 18
  },
  TDEditIcon: {
    marginBottom: -5
  },
  btnStyle: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 10,
    marginRight: 10
  }
});
