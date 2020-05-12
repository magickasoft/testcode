import { StyleSheet } from 'react-native';
import { dimensions } from '@styles';

export default (colors) => StyleSheet.create({
  commentContainer: {
    paddingLeft: dimensions.indent * 1.5
  },
  rightContainerStyle: {
    width: dimensions.indent * 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: dimensions.indent
  },
  buttonShare: {
    width: dimensions.indent * 3,
    alignItems: 'flex-end'
  },
  buttonPlusBlue: {
    backgroundColor: colors.activePrimary,
    borderColor: colors.white,
    borderWidth: 2
  },
  refreshControl: {
    opacity: 0
  },
  spinnerContainer: {
    height: 100,
    width: dimensions.windowWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyContainer: {
    height: 200,
    width: dimensions.windowWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  empty: {
    height: '100%',
    width: dimensions.windowWidth,
    transform: [{ translateY: -20 }]
  },
  spinner: {
    color: colors.activePrimary
  }
});
