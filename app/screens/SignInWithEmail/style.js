import { StyleSheet } from 'react-native';
import { dimensions } from '../../styles';


const styles = () => StyleSheet.create({
  root: {
    backgroundColor: '#f3f3f3',
  },
  container: {
    backgroundColor: '#f3f3f3',
    padding: dimensions.indent * 2.5,
  },
  placeholder: {
    color: '#a9a9a9',
  },
});

export default styles;
