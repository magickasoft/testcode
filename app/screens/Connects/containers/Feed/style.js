import { StyleSheet } from 'react-native';
import { dimensions, fontWeights } from '../../../../styles';
import fontSizes from '../../../../styles/fontSizes';


const styles = colors => StyleSheet.create({
  contentContainerStyle: {
    padding: dimensions.indent,
    backgroundColor: colors.backgroundSecondary,
  },
  cardHeader: {
    flexDirection: 'row',
    paddingLeft: dimensions.indent * 1.5,
    paddingTop: dimensions.indent * 2,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: dimensions.indent * 2,
    justifyContent: 'space-between',
  },
  title: {
    color: colors.activePrimary,
    fontSize: fontSizes.larger,
    fontWeight: fontWeights.bold,
    marginBottom: dimensions.indent / 3,
  },
  date: {
    color: colors.inert,
    fontSize: fontSizes.smaller,
    fontWeight: fontWeights.medium,
  },
  textContainer: {
    margin: dimensions.indent * 2,
    marginVertical: dimensions.indent * 1.5,
  },
  imagesRowOneContainer: {
    flexDirection: 'row',
    marginBottom: dimensions.indent / 2,
  },
  imagesRowTwoContainer: {
    flexDirection: 'row',
    marginBottom: dimensions.indent,
  },
  imageFirst: {
    flex: 1,
    height: dimensions.verticalIndent * 20,
  },
  imageSecond: {
    flex: 1,
    height: dimensions.verticalIndent * 14,
  },
  info: {
    flexDirection: 'row',
    paddingLeft: dimensions.doubleIndent,
    marginBottom: dimensions.indent,
  },
  likeCount: {
    color: colors.grey,
    fontWeight: fontWeights.bold,
  },
  commentCount: {
    color: colors.grey,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: colors.lightestGrey,
  },
  footerText: {
    marginHorizontal: dimensions.indent,
    color: colors.grey,
  },
  iconFooter: {
    flexDirection: 'row',
    marginHorizontal: dimensions.indent * 2,
    marginVertical: dimensions.indent,
  },
  marginLeft: {
    marginLeft: dimensions.indent / 2,
  },
  marginRight: {
    marginRight: dimensions.indent / 2,
  },
  icon: {
    width: dimensions.indent * 4,
    alignItems: 'center',
  },
});

export default styles;
