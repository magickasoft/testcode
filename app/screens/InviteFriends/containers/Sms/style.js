import { StyleSheet } from 'react-native';
import { dimensions, colors } from '../../../../styles';

const RADIUS = dimensions.indent * 1.5;

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: dimensions.indent,
  },
  item: {
    flex: 1,
    margin: dimensions.indent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedItem: {
    backgroundColor: colors.activePrimary,
  },
  checkBox: {
    height: RADIUS * 2,
    width: RADIUS * 2,
    borderRadius: RADIUS,
    borderWidth: 1,
    borderColor: colors.activePrimary,
  },
});

export default styles;
