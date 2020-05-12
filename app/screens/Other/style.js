import { StyleSheet } from 'react-native';
import { dimensions, fontSizes, fontWeights } from '../../styles';

export default (colors) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  body: {
    flex: 3
  },
  content: {
    backgroundColor: colors.transparent
  },
  itemSection: {
    paddingTop: dimensions.indent * 1.8,
    paddingBottom: 3,
    marginLeft: dimensions.indent * 1.4
  },
  sectionText: {
    color: '#967374',
    fontWeight: fontWeights.bold
  },
  separator: {
    height: 7
  },
  itemContainer: {
    paddingHorizontal: dimensions.indent * 1.4,
    paddingVertical: dimensions.indent * 0.7,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#C8C7CC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileName: {
    fontSize: fontSizes.large,
    fontWeight: fontWeights.bold
  },
  avatarStyle: {
    marginRight: dimensions.indent * 1.4
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimensions.indent
  }
});
