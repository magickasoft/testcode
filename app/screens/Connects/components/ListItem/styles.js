import { StyleSheet } from 'react-native';
import fontSizes from '../../../../styles/fontSizes';
import * as dimensions from '../../../../styles/dimensions';

export default StyleSheet.create({
  p: {
    fontSize: 13,
    textAlign: 'left',
    color: '#77786e',
    marginTop: 2,
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#f3f3f3',
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  imagesButton: {
    width: 21,
    height: 21,
  },
  avatarImg: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: '#dbfbf0',
    width: 45,
    height: 45,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    borderColor: '#f3f3f3',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000',
  },
  h2: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#453e30',
  },
  dataWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
  onlineIndicator: {
    position: 'absolute',
    right: -2,
    bottom: -3,
    backgroundColor: '#00CC00',
    width: 16,
    height: 16,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  date: {
    fontSize: fontSizes.medium,
    textAlign: 'right',
    marginRight: dimensions.indent,
  },
});
