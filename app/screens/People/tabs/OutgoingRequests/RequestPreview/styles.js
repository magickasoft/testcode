import { StyleSheet } from 'react-native';
import { fontSizes } from '@styles';

export default StyleSheet.create({
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
  dataWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 60,
    paddingHorizontal: 15,
  },
  nameWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
  onlineIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#00CC00',
    width: 24,
    height: 24,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 40,
  },
  actionButtonText: {
    fontSize: fontSizes.larger,
  },
});
