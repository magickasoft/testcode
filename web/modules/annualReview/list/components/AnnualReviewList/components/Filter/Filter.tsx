import * as React from 'react';
import { ListModel } from 'utils/list';
import { FilterPanel } from 'components/FilterPanel';
import { Form } from './components/Form';

interface Properties {
  isClear: boolean;
  onClear: () => any;
  isExpanded: boolean;
  onToggle: () => any;
  companies: ListModel;
  onChange: (value: any) => any;
  value: any;
}

const Filter = React.memo((properties: Properties) => {
  const { isClear, isExpanded, onClear, onToggle, onChange, companies, value } = properties;

  return (
    <FilterPanel clear={!isClear} onClearClick={onClear} expanded={isExpanded} onExpandedChange={onToggle}>
      <Form companies={companies} onChange={onChange} value={value} />
    </FilterPanel>
  );
});

export { Filter };
