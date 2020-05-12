import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

const styles = colors => StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
  label: {
    fontWeight: '500',
    marginLeft: 5,
    marginRight: 15,
  },
  indicatorStyle: {
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
      height: 0,
    },
  },
  tabBarStyle: {
    paddingHorizontal: 3,
    backgroundColor: '#f3f4f8',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 38,
    borderRadius: 19,
  },
  tabStyle: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    minHeight: 38,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: dimensions.indent,
    marginVertical: dimensions.indent,
  },
  balance: {
    position: 'absolute',
    right: 0,
  },
});

export default styles;
