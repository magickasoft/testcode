import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

export default StyleSheet.create({
  root: {
    justifyContent: 'space-between'
  },
  container: {
    backgroundColor: colors.backgroundSecondary,
    paddingBottom: dimensions.indent
  },
  places: {
    padding: dimensions.indent
  },
  placeItem: {
    borderBottomColor: colors.dartInert,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
    paddingVertical: dimensions.indent,
    alignItems: 'center'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimensions.indent
  },
  iconContainer: {
    margin: dimensions.indent
  },
  textContainer: {
    borderBottomColor: colors.dartInert,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
    padding: dimensions.indent / 2
  },
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.activePrimary,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
