import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes } from '@styles';

export const ICON_SIZE = dimensions.indent * 6;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f3f3f3',
  },
  contentContainer: {
    marginTop: dimensions.indent,
    padding: dimensions.indent * 1.5,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: dimensions.indent,
    alignItems: 'center',
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContent: {
    flex: 1,
    paddingHorizontal: dimensions.indent * 2,
  },
  title: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.larger,
  },
  subTitle: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.larger,
    color: colors.inert,
  },
  connect: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.larger,
    color: colors.purple,
  },
});

export default styles;
