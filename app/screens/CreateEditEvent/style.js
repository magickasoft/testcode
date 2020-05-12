import { StyleSheet } from 'react-native';
import { dimensions, fontSizes } from '@styles';

const { indent } = dimensions;

const BUTTON_BACKGROUND_DISABLED_COLOR = '#cccccc';

export default (colors) => StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary
  },
  wrapper: {
    padding: dimensions.indent
  },
  containerInput: {
    paddingVertical: indent / 1.5
  },
  secondContainerInput: {
    minHeight: indent * 4
  },
  logo: {
    width: dimensions.verticalIndent * 30,
    height: dimensions.verticalIndent * 30,
    resizeMode: 'cover',
    alignSelf: 'center'
  },
  button: {
    color: colors.white,
    fontSize: fontSizes.medium
  },
  containerButton: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.activePrimary,
    borderRadius: 5,
    flexDirection: 'row',
    height: 42,
    justifyContent: 'center',
    marginVertical: 21,
    marginHorizontal: 15
  },
  disabled: {
    backgroundColor: BUTTON_BACKGROUND_DISABLED_COLOR
  },
  textArea: {
    height: dimensions.indent * 8
  },
  containerTextArea: {
    height: dimensions.indent * 10
  },
  labelStyle: {
    paddingBottom: indent / 2,
    paddingTop: indent / 2,
    fontSize: fontSizes.medium,
    fontWeight: '700'
  },
  modalContent: {
    width: '100%',
    backgroundColor: colors.white
  },
  flex: {
    flex: 1
  },
  textInputContainer: {
    borderTopWidth: 0,
    backgroundColor: colors.white,
    paddingLeft: 10,
    paddingRight: 10
  },
  textInput: {
    backgroundColor: colors.opacityGrey
  },
  description: {
    flex: 1,
    color: colors.black,
    fontSize: fontSizes.medium,
    fontWeight: '500'
  },
  row: {
    height: 'auto'
  },
  rowData: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  main: {
    color: colors.black,
    fontSize: fontSizes.medium,
    fontWeight: '500'
  },
  secondary: {
    color: colors.lightGrey,
    fontSize: fontSizes.small,
    fontWeight: '400'
  },
  highlightStyle: {
    color: colors.lightGrey
  },
  head: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: dimensions.indent * 30,
    backgroundColor: '#44494f'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  inner: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  right: {
    position: 'absolute',
    right: 0,
    bottom: 1
  },
  edit: {
    opacity: 0.9,
    position: 'relative',
    borderRadius: 0,
    borderTopLeftRadius: 8,
    backgroundColor: colors.white,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  camera: {
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#363940',
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white
  },
  cameraText: {
    color: colors.white,
    fontSize: fontSizes.small,
    fontWeight: '400'
  },
  icon: {
    margin: 5
  }
});
