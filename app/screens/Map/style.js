import { StyleSheet } from 'react-native';
import { ITEM_HEIGHT } from './components/PlaceListItem/style';
import { dimensions } from '../../styles';

export default (colors) => StyleSheet.create({
  root: {
    backgroundColor: colors.backgroundPrimary
  },
  container: {
    minHeight: ITEM_HEIGHT
  },
  contentContainerStyle: {
    paddingBottom: dimensions.indent * 2
  },
  search: {
    minHeight: 36,
    flex: 1
  },
  content: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: colors.activePrimary
  },
  containerStyle: {},
  cornerStyle: {
    flex: 0
  },
  modalContent: {
    width: '100%',
    backgroundColor: colors.white
  }
});
