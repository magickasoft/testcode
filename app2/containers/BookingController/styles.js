import { StyleSheet } from 'react-native';

import { color } from 'theme';

import { isIphoneX } from 'utils';

export default StyleSheet.create({
  detailsLabel: {
    lineHeight: 28,
    color: color.secondaryText,
    fontSize: 12,
    marginLeft: 15
  },
  listOption: {
    paddingHorizontal: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1,
    paddingRight: 12,
    justifyContent: 'center',
    minHeight: 45
  },
  iconGap: {
    paddingLeft: 12
  },
  title: {
    color: color.secondaryText
  },
  emptyValueTitle: {
    fontSize: 17
  },
  value: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: '900'
  },
  valueWithError: {
    color: color.danger
  },
  divider: {
    marginLeft: -16,
    marginRight: -16,
    marginVertical: 8
  },
  errorDot: {
    position: 'absolute',
    marginLeft: 6,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: color.danger
  },

  bookingBtnLoading: {
    margin: 5
  },
  footerOrderInfo: {
    marginBottom: isIphoneX() ? 25 : 10,
    marginTop: 5
  },
  informText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21
  },
  popupLocationTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 0,
    marginBottom: 0
  },
  pointListDivider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: color.pixelLine,
    marginBottom: 8
  }
});
