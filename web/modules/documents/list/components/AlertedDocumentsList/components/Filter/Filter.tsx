import * as React from 'react';
import { FilterPanel } from 'components/FilterPanel';
import { Form } from './components/Form';

interface Properties {
  isClear: boolean;
  onClear: () => any;
  isExpanded: boolean;
  onToggle: () => any;
  onChange: (value: any) => any;
  value: any;
  hiddenFields?: string[];
}

const Filter = React.memo((properties: Properties) => {
  const { isClear, isExpanded, onClear, onToggle, onChange, value, hiddenFields } = properties;

  const onChangeHook = React.useCallback((value: any) => {
    onChange(value);
  }, []);

  return (
    <FilterPanel clear={!isClear} onClearClick={onClear} expanded={isExpanded} onExpandedChange={onToggle}>
      <Form onChange={onChangeHook} value={value} hiddenFields={hiddenFields} />
    </FilterPanel>
  );
});

export { Filter };
