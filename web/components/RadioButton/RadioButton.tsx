/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import cn from 'classnames';
import { CheckMark, CheckMarkPropTypes } from 'components/CheckBox/CheckMark';
import { ElementPropTypes, InputPropTypes } from 'utils/prop-types';
import { bool, func, instanceOf, node, string } from 'prop-types';

import { filter, prefixBy, prefixed, withControlledProps } from 'utils/props';
import styles from './radioButton.module.css';

const { FACE_ACTIVE, FACE_DEFAULT, FACE_DANGER, FACES } = CheckMark;

const RadioButtonPropType = {
  checked: bool
};

const RadioButtonDefProps = {
  checked: false
};

export interface RadioButtonProps {
  children: React.ReactNode;
}

interface MarkProps {
  value: any;
  flat: boolean;
  face: typeof FACE_ACTIVE | typeof FACE_DEFAULT | typeof FACE_DANGER;
  children?: React.ReactNode;
  focused: boolean;
  error: string;
  htmlValue: string;
}

const getFace = ({ error, value, focused }: MarkProps) => {
  if (error) {
    return FACE_DANGER;
  }
  if (value || focused) {
    return FACE_ACTIVE;
  }

  return FACE_DEFAULT;
};

const Mark = (props: MarkProps) => {
  const { value, htmlValue, flat, children } = props;

  return (
    <CheckMark
      {...filter(props, CheckMarkPropTypes)}
      checked={value === htmlValue}
      flat={flat || value === htmlValue}
      face={getFace(props)}
      rounded
      className={cn(styles.mark, { [styles.label]: children != null && children !== '' })}
    />
  );
};

export const ControlledRadioButton = (props: typeof ControlledRadioButton.propTypes) => {
  const { disabled, htmlValue, readOnly, value, children, onBlur, onFocus, onChange } = props;
  const selfRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const [focused, setFocused] = React.useState(false);
  const labelProps = prefixed(props, 'label');

  const handleMouseDown = React.useCallback(
    (event) => {
      event.preventDefault();
      inputRef.current.focus();
    },
    [inputRef, selfRef]
  );

  const handleInputBlur = React.useCallback(
    (...args) => {
      setFocused(false);

      if (typeof onBlur === 'function') {
        onBlur(...args);
      }
    },
    [inputRef]
  );

  const handleInputFocus = React.useCallback(
    (...args) => {
      setFocused(true);

      if (typeof onFocus === 'function') {
        onFocus(...args);
      }
    },
    [inputRef]
  );

  const handleInputChange = React.useCallback(
    (value) => {
      if (typeof onChange === 'function') {
        onChange(value, htmlValue);
      }
    },
    [inputRef]
  );

  return (
    <div
      className={cn(styles.radioButton, {
        [styles.disabled]: disabled,
        [styles.focused]: focused
      })}
    >
      <label
        {...filter(labelProps, ElementPropTypes)}
        ref={selfRef}
        className={cn(styles.label, { [styles.disabled]: disabled, [styles.focused]: focused }, labelProps.className)}
        onMouseDown={handleMouseDown}
      >
        <input
          ref={inputRef}
          checked={value}
          disabled={disabled}
          readOnly={readOnly}
          type="radio"
          defaultValue={htmlValue}
          className={styles.input}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
        />
        <Mark {...props} />
        {children}
      </label>
    </div>
  );
};

ControlledRadioButton.propTypes = {
  ...InputPropTypes,
  ...RadioButtonPropType,
  ...prefixBy('label', ElementPropTypes),
  children: node,
  error: instanceOf(Error),
  htmlValue: string,
  value: bool,
  onChange: func,
  onErrorChange: func
};

ControlledRadioButton.defaultProps = {
  ...RadioButtonDefProps,
  children: undefined,
  error: undefined,
  htmlValue: undefined,
  value: '',
  onChange: undefined,
  onErrorChange: undefined
};

ControlledRadioButton.controlledProps = {
  error: { onChangeProp: 'onErrorChange' },
  value: { onChangeProp: 'onChange', readOnlyProps: ['readOnly', 'disabled'] }
};

export const [RadioButton, RadioButtonPropTypes, RadioButtonDefaultProps] = withControlledProps(ControlledRadioButton);

RadioButton.FACE_DANGER = FACE_DANGER;
RadioButton.FACE_DEFAULT = FACE_DEFAULT;
RadioButton.FACES = FACES;
