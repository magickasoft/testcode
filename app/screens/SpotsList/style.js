import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';
import { NAV_BAR_HEIGHT } from './constants';

export default (colors) => StyleSheet.create({
  contentContainerStyle: {
    padding: dimensions.indent
  },
  tabBar: {
    backgroundColor: colors.backgroundSecondary
  },
  pager: {
    zIndex: -1,
    transform: [{ translateY: -NAV_BAR_HEIGHT }]
  },
  buttonsContainer: {
    width: dimensions.indent * 10,
    paddingRight: dimensions.indent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerStyleIcon: {
    height: dimensions.indent * 4,
    width: dimensions.indent * 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.activePrimary,
    borderWidth: 1,
    borderRadius: dimensions.indent / 2,
    backgroundColor: colors.backgroundPrimary,
    marginHorizontal: dimensions.indent / 2
  },
  containerSearch: {
    marginTop: 0,
    marginHorizontal: dimensions.indent
  },
  modalContent: {
    width: '100%',
    backgroundColor: colors.white
  }
});
