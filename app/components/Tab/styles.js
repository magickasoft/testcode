import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

export default (colors) => StyleSheet.create({
  def: {
    overflow: 'hidden',
    flexDirection: 'row',
    height: dimensions.indent * 4,
    backgroundColor: colors.backgroundSecondary,
    margin: dimensions.verticalIndent,
    borderColor: colors.activePrimary,
    borderRadius: dimensions.indent / 2,
    borderWidth: 1,
    flex: 1
  },
  simple: {
    overflow: 'hidden',
    flexDirection: 'row',
    height: dimensions.indent * 5,
    backgroundColor: '#F5F6F7',
    flex: 1
  }
});
