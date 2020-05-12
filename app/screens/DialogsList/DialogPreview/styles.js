import { StyleSheet } from 'react-native';

import { colors } from '@styles';

export default StyleSheet.create({
  p: {
    fontSize: 13,
    textAlign: 'left',
    color: '#77786e',
    marginTop: 2,
  },
  itemWrapper: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#f3f3f3',
    borderBottomWidth: 1,
    minHeight: 60,
    paddingHorizontal: 15,
  },
  imagesButton: {
    width: 21,
    height: 21,
  },
  avatarImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 35,
    backgroundColor: '#dbfbf0',
    width: 70,
    height: 70,
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
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000',
  },
  p2: {
    marginTop: 3,
    color: '#77786e',
    fontSize: 15,
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
  rightContainer: {
    alignItems: 'flex-end',
  },
  date: {
    height: 19,
  },
  readIndicator: {
    height: 21,
  },
  readIndicatorIcon: {
    fontSize: 15,
    color: '#77786e',
  },
  unreadMessagesContainer: {
    borderRadius: 20,
    minWidth: 21,
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    padding: 2,
  },
  unreadMessagesText: {
    color: colors.white,
  },
});
