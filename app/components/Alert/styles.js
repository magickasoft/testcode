import { Dimensions, StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

const { width, height } = Dimensions.get('window');

export const colors = {
  transparent: 'rgba(0, 0, 0, 0)',
  redLight: '#f2dede',
  red: '#a94341',
  greenLight: '#dff0d8',
  green: '#3c763d',
  yellowLight: '#ede8be',
  yellow: '#c2b238'
};

export default StyleSheet.create({
  root: {
    justifyContent: 'flex-start',
    margin: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green'
  },
  container: {
    width,
    paddingTop: dimensions.statusBarHeight,
    paddingBottom: 10,
    paddingRight: 40,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: height / 8,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    flex: 1,
    color: 'black'
  },
  icon: {
    marginHorizontal: 20
  },
  iconClose: {
    position: 'absolute',
    top: dimensions.statusBarHeight + dimensions.indent,
    right: dimensions.indent
  },
  close: {
    width: dimensions.indent * 3,
    height: dimensions.indent * 8
  },

  // type error
  errContainer: {
    backgroundColor: colors.redLight,
    borderBottomColor: colors.red
  },
  errText: {
    color: colors.red
  },

  // type error
  successContainer: {
    backgroundColor: colors.greenLight,
    borderBottomColor: colors.green
  },
  successText: {
    color: colors.green
  },

  // type error
  noNetworkContainer: {
    backgroundColor: colors.yellowLight,
    borderBottomColor: colors.yellow
  },
  noNetworkText: {
    color: colors.yellow
  }
});
