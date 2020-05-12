import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

export default (colors) => StyleSheet.create({
  icon: {
    marginRight: 5
  },
  label: {
    fontWeight: '500',
    marginLeft: 15,
    marginRight: 15
  },
  indicator: {
    left: 3,
    bottom: 2,
    borderWidth: 0,
    backgroundColor: colors.backgroundPrimary,
    height: 33,
    borderRadius: 16.5,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.20,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  tabBar: {
    paddingHorizontal: 3,
    backgroundColor: '#f3f4f8',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 38,
    borderRadius: 19
  },
  tab: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    minHeight: 38
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: dimensions.indent,
    marginVertical: dimensions.indent
  },
  tabBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute'
  },
  right: {
    right: 10
  },
  left: {
    left: 10
  }
});
