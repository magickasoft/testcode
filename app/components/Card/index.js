import { View, ViewPropTypes } from 'react-native';
import { withProps } from 'recompose';
import styles from '../../styles';
import s from './styles';

const Card = withProps(({ style }) => ({
  style: [
    styles.shadow,
    s.root,
    style
  ]
}))(View);

Card.propTypes = {
  style: ViewPropTypes.style
};

export default Card;
