import { StyleSheet } from 'react-native';
import { dimensions, scalingUtils, fontSizes, fontWeights } from '@styles';

export default (colors) => StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPrimary,
    paddingBottom: dimensions.indent
  },
  tabBarContainer: {
    height: scalingUtils.scale(150),
    overflow: 'hidden'
  },
  containerBackgroundSlider: {
    backgroundColor: colors.activePrimary
  },
  backgroundSlider: {
    paddingHorizontal: dimensions.indent,
    paddingTop: dimensions.indent * 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey
  },
  buttonPlusContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonPlus: {
    height: 75,
    width: 75,
    borderRadius: 37.5
  },
  buttonPlusBlue: {
    backgroundColor: colors.activePrimary,
    borderColor: colors.white,
    borderWidth: 2
  },
  buttonPlusTitle: {
    fontSize: fontSizes.medium,
    color: colors.activePrimary
  },
  icon: {
    justifyContent: 'center'
  },
  pollContainer: {
    backgroundColor: colors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: dimensions.indent,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#CFCFCF',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    height: scalingUtils.verticalScale(46),
    marginVertical: 20
  },
  copilotButtonContainer: {
    flex: 1
  },
  descriptionContainer: {
    flex: 1,
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  infoElement: {
    marginLeft: scalingUtils.scale(8),
    padding: scalingUtils.scale(5),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoElementIcon: {
    marginRight: scalingUtils.scale(10),
    width: 20,
    height: 20
  },
  infoElementText: {
    maxWidth: dimensions.windowWidth * 0.8
  },
  infoElementPopover: {
    width: dimensions.windowWidth * 0.8
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    fontWeight: fontWeights.semiBold,
    marginLeft: 10,
    fontSize: fontSizes.medium
  },
  grey: {
    color: colors.grey
  },
  buttonCheckIn: {
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  },
  buttonCheckInText: {
    color: colors.activePrimary
  },
  contentSeparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#CFCFCF'
  },
  buttonsSeparator: {
    width: 0.5,
    height: '100%',
    backgroundColor: '#CFCFCF'
  },
  tagContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F6F7',
    paddingVertical: 5,
    borderRadius: 4,
    paddingHorizontal: 15
  },
  tagSeparator: {
    width: 8
  },
  tagsContainer: {
    marginTop: 10,
    marginHorizontal: scalingUtils.scale(13)
  },
  tagText: {
    fontSize: fontSizes.smaller,
    marginLeft: 3
  },
  galleryHeader: {
    width: scalingUtils.scale(13)
  },
  checkInsListButton: {
    borderColor: '#CFCFCF',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    height: scalingUtils.verticalScale(46)
  },
  row: {
    flexDirection: 'row'
  },
  placeInfoList: {
    marginTop: 15
  },
  label: {
    fontFamily: 'SFProText-Regular',
    fontSize: fontSizes.small
  }
});
