import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

export default StyleSheet.create({
  likeButtonsContainer: {
    flexDirection: 'row'
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 20,
    height: 30
  },
  marginRight: {
    marginRight: dimensions.doubleIndent
  },
  iconStyle: {
    marginRight: 5
  }
});
