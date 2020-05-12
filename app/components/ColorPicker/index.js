import { compose, defaultProps, withState, withPropsOnChange } from 'recompose';
import ColorPicker from './ColorPicker';

const enhance = compose(
  defaultProps({ color: '' }),
  withState('selectedColor', 'setSelectedColor', (props) => props.color),
  withPropsOnChange(['color'], (props) => {
    props.color && props.setSelectedColor(props.color);
  }),
);

export default enhance(ColorPicker);
