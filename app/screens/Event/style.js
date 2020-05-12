import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '@styles';

export default (colors) => StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white
  },
  eventContent: {
    backgroundColor: colors.backgroundPrimary,
    paddingBottom: dimensions.indent
  },
  image: {
    width: '100%',
    height: dimensions.indent * 30
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    backgroundColor: colors.white,
    padding: dimensions.indent
  },
  backgroundSlider: {
    position: 'relative',
    backgroundColor: colors.activePrimary
  },
  title: {
    marginVertical: dimensions.indent,
    color: colors.black,
    fontSize: fontSizes.larger,
    fontWeight: '500'
  },
  description: {
    marginVertical: dimensions.indent,
    color: colors.black,
    fontSize: fontSizes.medium,
    fontWeight: '500'
  },
  btns: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row'
  },
  categoryBadge: {
    backgroundColor: colors.blue,
    position: 'absolute',
    left: 10,
    bottom: 10
  },
  statusBadge: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  badgeText: {
    fontSize: fontSizes.small,
    lineHeight: fontSizes.medium,
    paddingHorizontal: 5
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    width: 40,
    height: 40,
    overflow: 'hidden',
    margin: 5,
    padding: 7,
    backgroundColor: colors.white,
    opacity: 0.7,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ccc'
  }
});
