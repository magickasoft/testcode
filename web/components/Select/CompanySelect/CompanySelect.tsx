import * as React from 'react';
import { SelectOption, SingleSelectAutoSuggest } from '../SingleSelectAutoSuggest';

interface Props {
  value: number | string;
  onChange: (value: number | string) => any;
  searchable?: boolean;
  className?: string;
  filters?: { field: string; type: string; value: string | number }[];
  emptyOption?: SelectOption;
  disabled?: boolean;
}

const defaultProps: Partial<Props> = {
  searchable: true
};

export const CompanySelect = React.memo((props: Props) => {
  const { value, onChange, searchable, className, filters, emptyOption, disabled } = { ...defaultProps, ...props };

  return (
    <SingleSelectAutoSuggest
      className={className}
      disabled={disabled}
      value={value}
      onChange={onChange}
      searchable={searchable}
      serverOptions={{
        filters,
        url: '/company-list',
        limit: 50,
        mapper: (item) => ({ label: item.name, value: item.id }),
        searchField: 'name'
      }}
      emptyOption={emptyOption}
    />
  );
});
