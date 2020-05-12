import { StyleSheet } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';

const BUTTON_BACKGROUND_COLOR = '#312d3b';

const MARGIN_HORIZONTAL = dimensions.indent * 2;
const IMG_HEIGHT = dimensions.windowWidth;

export default StyleSheet.create({
  container: {
    paddingBottom: dimensions.indent * 4
  },
  imageContainer: {
    height: IMG_HEIGHT
  },
  itemStyle: {
    margin: dimensions.indent
  },
  content: {
    marginHorizontal: MARGIN_HORIZONTAL
  },
  aboutMe: {
    marginVertical: dimensions.indent
  },
  buttonContainer: {
    flexDirection: 'row',
    width: dimensions.windowWidth
  },
  button: {
    color: colors.white,
    fontSize: fontSizes.smaller
  },
  containerButton: {
    flex: 1,
    backgroundColor: BUTTON_BACKGROUND_COLOR,
    borderRadius: 15,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    margin: 4
  },
  editProfile: {
    position: 'absolute',
    top: IMG_HEIGHT - dimensions.indent * 4,
    right: dimensions.indent
  },
  separator: {
    marginLeft: MARGIN_HORIZONTAL,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
    paddingTop: MARGIN_HORIZONTAL
  },
  label: {
    fontSize: fontSizes.larger,
    fontWeight: fontWeights.heavy,
    color: colors.textPrimary,
    paddingTop: 15,
    paddingBottom: 2
  },
  value: {
    fontSize: fontSizes.small,
    fontWeight: fontWeights.normal,
    color: colors.grey,
    flex: 1
  },
  sub: {
    marginLeft: 5,
    paddingTop: 15,
    paddingBottom: 7
  },
  wideBtn: {
    color: colors.activePrimary,
    fontSize: fontSizes.medium
  },
  wrapperWideBtn: {
    flex: 1,
    backgroundColor: colors.ligthBlue,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginVertical: 21,
    marginHorizontal: 16
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inLine: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  wideBtn3: {
    color: colors.white
  },
  wrapperWideBtn3: {
    backgroundColor: colors.activePrimary
  }
});
