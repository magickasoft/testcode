import * as React from 'react';
import { Icon } from 'components/Icon';
import { Tooltip } from 'components/Tooltip';

import styles from './styles.module.css';

interface Props {
  text: string;
  value: string;
  disabled?: boolean;
  title?: string;
  checked: boolean;
  onClick: (value: string, disabled: boolean) => any;
}

export const OptionItem = React.memo((props: Props) => {
  const { text, value, checked, disabled, title, onClick } = props;
  const onOptionClick = () => onClick(value, disabled);

  return (
    // eslint-disable-next-line
    <div className={styles.option} onClick={onOptionClick}>
      <Icon
        className={`${styles.icon} ${checked ? 'minus' : 'plus'}`}
        type={checked ? 'minus-filled' : 'plus-filled'}
        size="small"
      />
      {title ? (
        <Tooltip id={`hint${value}`} type="warning" content={title} event="mouseenter">
          <span className={disabled ? styles.disabledOption : ''}>{text}</span>
        </Tooltip>
      ) : (
        <span className={disabled ? styles.disabledOption : ''}>{text}</span>
      )}
    </div>
  );
});
