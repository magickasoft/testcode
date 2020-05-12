import { compose, withProps, defaultProps, withState } from 'recompose';
import Input from './Input';

const enhance = compose(
  withProps(({ value }) => ({
    value: value ? String(value) : null
  })),
  defaultProps({
    isValid: true,
    id: null
  }),
  withState('isFocus', 'setFocus', false),
  withProps((props) => ({
    onFocus: (e) => {
      props.setFocus(true);
      props.onFocus && props.onFocus(props.id, e);
    },
    onBlur: (e) => {
      !props.value && props.setFocus(false);
      props.onBlur && props.onBlur(props.id, e);
    },
    isNotValid: !props.isValid && !!props.value,
    inputRef: (ref) => {
      if (!!ref && props.inputRef) {
        props.inputRef(ref, props.id);
      }
    }
  })),
);

export default enhance(Input);
