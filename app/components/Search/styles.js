import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const searchRadius = dimensions.indent * 2;

const BORDER_COLOR = '#ccc';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: searchRadius * 2,
    backgroundColor: '#eff3f4',
    marginVertical: dimensions.indent,
    borderRadius: searchRadius / 4,
    borderColor: BORDER_COLOR
    // borderWidth: StyleSheet.hairlineWidth,
  },
  clearInput: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  inputContainer: {
    flex: 10,
    alignItems: 'center',
    height: searchRadius * 2
  },
  secondContainerStyle: {
    backgroundColor: '#eff3f4',
    alignItems: 'flex-start'
  },
  input: {
    height: searchRadius * 2,
    paddingVertical: 0,
    color: colors.activePrimary,
    fontSize: 17,
    alignItems: 'center',
    backgroundColor: '#eff3f4'
  },
  containerStyleIcon: {
    height: searchRadius * 2
  }
});
