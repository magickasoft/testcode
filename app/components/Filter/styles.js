import { StyleSheet } from 'react-native';
import { dimensions, fontWeights } from '../../styles';

export default (colors) => StyleSheet.create({
  filterContainer: {
    marginVertical: dimensions.indent,
    marginRight: dimensions.indent * 1.5
  },
  label: {
    flex: 1,
    marginVertical: dimensions.indent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  // radioButton - - - - -
  radioButtonContainer: {
    marginLeft: StyleSheet.hairlineWidth,
    flex: 1,
    flexDirection: 'row',
    marginVertical: 3
  },
  radioButton: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.activePrimary,
    marginRight: dimensions.indent,
    height: dimensions.indent * 3.5
  },
  radioButtonActive: {
    backgroundColor: colors.activePrimary
  },
  titleStyleRadioButton: {
    color: colors.activePrimary
  },
  // switcher - - - - -
  switcher: {
    marginVertical: dimensions.indent / 2,
    marginRight: dimensions.indent * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  // distance - - - - -
  distanceLabelContainer: {
    alignItems: 'center',
    zIndex: 2,
    marginBottom: 0
  },
  slider: {
    zIndex: 0,
    backgroundColor: colors.activePrimary
  },
  sliderMarker: {
    zIndex: 3,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  // category - - - - -
  category: {
    flexWrap: 'wrap',
    flex: 3,
    marginBottom: dimensions.indent
  },
  margin: {
    marginVertical: 5
  },
  // sortBy - - - - -
  sortBy: {
    flex: 0,
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.activePrimary,
    borderRadius: 4,
    marginBottom: dimensions.indent
  },
  sortByItem: {
    flex: 1,
    marginRight: 0,
    borderRadius: 0
  },
  sortByTitle: {
    marginHorizontal: 0
  },
  highlightText: {
    fontWeight: fontWeights.normal
  },
  applyButton: {
    backgroundColor: colors.activePrimary,
    alignItems: 'center',
    padding: dimensions.indent * 1.5,
    marginRight: dimensions.indent * 1.5,
    borderRadius: 2
  },
  applyButtonText: {
    color: colors.white
  }
});
