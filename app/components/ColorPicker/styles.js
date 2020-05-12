import { StyleSheet } from 'react-native';
import { colors, dimensions, fontSizes, fontWeights } from '../../styles';

const { halfIndent, indent } = dimensions;

export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: colors.white,
    padding: halfIndent,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    width: '90%',
    maxHeight: '55%'
  },
  containerTitle: {
    flex: 1.5,
    justifyContent: 'center'
  },
  title: {
    paddingLeft: indent,
    color: colors.gray,
    fontSize: fontSizes.big,
    fontWeight: fontWeights.semiBold
  },
  containerContent: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  secondContainerContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: halfIndent
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
