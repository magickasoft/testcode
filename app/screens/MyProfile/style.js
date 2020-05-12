import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '../../styles';
import fontWeights from '../../styles/fontWeights';
import theme from '../../services/theme';

const colors = theme.get();

const MARGIN_HORIZONTAL = dimensions.indent * 2;
const IMG_HEIGHT = dimensions.windowWidth;

const styles = StyleSheet.create({
  container: {
    paddingBottom: dimensions.indent * 4,
  },
  imageContainer: {
    height: IMG_HEIGHT,
  },
  itemStyle: {
    margin: dimensions.indent,
  },
  content: {
    marginHorizontal: MARGIN_HORIZONTAL,
  },
  aboutMe: {
    marginVertical: dimensions.indent,
  },
  button: {
    color: colors.white,
    fontSize: fontSizes.smaller,
  },
  copilotContainerButton: {
    flex: 1,
  },
  rightContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: dimensions.indent,
  },
  separator: {
    marginLeft: MARGIN_HORIZONTAL,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
    paddingTop: MARGIN_HORIZONTAL,
  },
  label: {
    fontSize: fontSizes.larger,
    fontWeight: fontWeights.heavy,
    color: colors.textPrimary,
    paddingTop: 15,
    paddingBottom: 2,
  },
  value: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.normal,
    color: colors.grey,
  },
  wideBtn: {
    color: colors.activePrimary,
    fontSize: fontSizes.medium,
  },
  wrapperWideBtn: {
    flex: 1,
    backgroundColor: colors.ligthBlue,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginVertical: 21,
    marginHorizontal: 16,
  },
  wideBtn2: {
    color: colors.black,
    fontSize: fontSizes.medium,
  },
  wrapperWideBtn2: {
    flex: 1,
    backgroundColor: colors.lightestGrey,
    borderRadius: 5,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    marginVertical: 21,
    marginHorizontal: 16,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


export default styles;
