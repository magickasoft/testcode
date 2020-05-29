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
}

const Filter = React.memo((properties: Properties) => {
  const { isClear, isExpanded, onClear, onToggle, onChange, value } = properties;

  return (
    <FilterPanel clear={!isClear} onClearClick={onClear} expanded={isExpanded} onExpandedChange={onToggle}>
      <Form onChange={onChange} value={value} />
    </FilterPanel>
  );
});

export { Filter };
