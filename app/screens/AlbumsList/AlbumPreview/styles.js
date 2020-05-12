import { StyleSheet } from 'react-native';
import { dimensions } from '@styles';

export default StyleSheet.create({
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#f3f3f3',
    borderBottomWidth: 1,
    minHeight: 60,
    paddingHorizontal: 15,
  },
  avatarImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  image: {
    width: dimensions.indent * 7,
    aspectRatio: 1,
    borderRadius: 10,
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
});
