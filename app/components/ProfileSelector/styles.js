import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, fontWeights } from '../../styles';

export default (colors) => StyleSheet.create({
  item: {
    flexDirection: 'row',
    height: 50
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerAvatar: {
    flex: 1,
    justifyContent: 'center'
  },
  containerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -5
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  text: {
    fontSize: fontSizes.large
  },
  content: {
    width: dimensions.windowWidth - dimensions.indent * 8,
    maxHeight: dimensions.windowHeight - dimensions.verticalIndent * 14,
    borderRadius: dimensions.indent,
    padding: dimensions.indent * 2,
    paddingLeft: dimensions.indent * 3
  },
  selectedProfile: {
    fontWeight: fontWeights.bold,
    color: colors.activePrimary
  },
  selectedProfileAvatar: {
    borderWidth: 3,
    borderColor: colors.activePrimary
  }
});
