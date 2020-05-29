import * as React from 'react';
import AutoComplete from 'antd/es/auto-complete';
import { InputArrow, InputText } from 'components/Input';
import { OptionItem } from './OptionItem';

import styles from './styles.module.css';

interface Props {
  value: string[];
  options: { text: string; value: string; disabled?: boolean; title?: string }[];
  onChange: (value: string[]) => any;
  onSearch: (text: string) => any;
  valueTitle: string;
  fetching?: boolean;
}

const defaultProps: Partial<Props> = {
  value: [],
  options: []
};

export const MultiSelectAutoSuggest = React.memo((props: Props) => {
  const { value, options, onChange, fetching, onSearch, valueTitle } = { ...defaultProps, ...props };
  const [edit, setEdit] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [text, setText] = React.useState('');
  const ref = React.useRef<any>();

  const onOptionChange = React.useCallback(
    (optionValue: string, disabled: boolean) => {
      if (ref.current) {
        ref.current.focus();
      }

      if (disabled) {
        return;
      }

      const index = (value || []).indexOf(optionValue);

      if (index === -1) {
        onChange((value || []).concat(optionValue));
      } else {
        const copy = [...value];
        copy.splice(index, 1);
        onChange(copy);
      }
    },
    [value, ref.current]
  );

  const startEdit = React.useCallback(() => {
    setEdit(true);
    setOpen(true);
  }, []);

  const switchEdit = React.useCallback((open: boolean) => {
    setEdit(open);
    setText('');
    onSearch('');
  }, []);

  const onTextChange = React.useCallback((text: string) => {
    setText(text);
    onSearch(text);
  }, []);

  const optionsToSelect = options
    .filter((item) => !(value || []).some((i) => i === item.value))
    .map((item) => (
      <OptionItem
        key={item.value}
        text={item.text}
        value={item.value}
        disabled={item.disabled}
        title={item.title}
        checked={(value || []).some((i) => i === item.value)}
        onClick={onOptionChange}
      />
    ));

  const selectedOptions = options
    .filter((item) => (value || []).some((i) => i === item.value))
    .map((item) => (
      <OptionItem
        key={item.value}
        text={item.text}
        value={item.value}
        disabled={item.disabled}
        title={item.title}
        checked={(value || []).some((i) => i === item.value)}
        onClick={onOptionChange}
      />
    ));

  const dropDownRenderer = React.useCallback(
    () => (
      <div className={styles.columns}>
        <div className={styles.column}>
          {optionsToSelect.length ? optionsToSelect : <div className={styles.empty}>No items to select.</div>}
        </div>
        <div className={styles.column}>
          {selectedOptions.length ? selectedOptions : <div className={styles.empty}>No selected items.</div>}
        </div>
      </div>
    ),
    [options]
  );

  return edit ? (
    <div className={styles.autocompleteBox}>
      <AutoComplete
        ref={ref}
        open={open}
        onDropdownVisibleChange={switchEdit}
        dropdownClassName={styles.menu}
        onSearch={onTextChange}
        dropdownMatchSelectWidth={false}
        dropdownRender={dropDownRenderer}
        loading={fetching}
        value={text}
      />
      {!!value.length && <span className={styles.count}>{value.length}</span>}
      <InputArrow />
    </div>
  ) : (
    // eslint-disable-next-line
    <div className={styles.value} onClick={startEdit}>
      <span className={styles.title}>{valueTitle}</span>
      {!!value.length && <span className={styles.count}>{value.length}</span>}
      <InputArrow rotate={false} />
    </div>
  );
});
