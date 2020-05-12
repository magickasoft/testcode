import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';

const styles = () => StyleSheet.create({
  root: {
    backgroundColor: '#f3f3f3',
  },
  container: {
    padding: dimensions.indent,
  },
  switch: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: dimensions.indent,
    justifyContent: 'space-between',
  },
  switchText: {
    // flexDirection: 'row',
    // width: '50%',
  },
  text2: {
    marginTop: dimensions.indent,
  },
});

export default styles;
