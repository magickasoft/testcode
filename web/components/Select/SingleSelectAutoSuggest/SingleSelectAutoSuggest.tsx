import * as React from 'react';
import debounce from 'lodash/debounce';
import Select from 'antd/es/select';
import { api } from 'modules/api';
import { SelectListName } from './selectListName';
import { getOptionsByListName } from './optionsSelector';

export interface SelectOption {
  label: string;
  value: number | string;
  disabled?: boolean;
}

interface Props {
  // Chosen value.
  value: number | string;

  // Change value handler.
  onChange: (value: number | string) => any;

  // User can search through items by label name.
  searchable?: boolean;

  // Predefined list name (aka shortcut to skip explicit data sources etc).
  listName?: SelectListName;

  // Custom options set (should be provided for custom lists).
  options?: SelectOption[];

  // Optional item for "empty" drop down element.
  emptyOption?: SelectOption;

  // Options describing fetching items from server (limits, filters etc).
  serverOptions?: {
    // API url to fetch items from.
    url: string;

    // Mapping function to transform server entity to select option element.
    mapper: (item: any) => SelectOption;

    // Optional auto suggest length limit.
    limit?: number;

    // Optional filters.
    filters?: { field: string; type: string; value: string | number }[];

    // Entity field to compare with search term.
    searchField?: string;
  };

  // Component CSS class name.
  className?: string;

  // Whether control is disabled.
  disabled?: boolean;
}

/**
 * Component can work in several modes to properly show data - predefined list name (listName parameter),
 * explicit options list (options parameter), serverOptions(API options to fetch and locally store items to be
 * shown in drop down). "listName" has biggest priority, next preferred parameter is "options",
 * lastly "serverOptions" parameter will be concerned.
 */

export const SingleSelectAutoSuggest = React.memo((props: Props) => {
  const { searchable, listName, options, emptyOption, value, onChange, serverOptions, className, disabled } = props;
  const [serverItems, setServerItems] = React.useState([]);
  const [term, setTerm] = React.useState('');

  const dropDownOptions = [emptyOption]
    .concat(getOptionsByListName(listName) || options || serverItems)
    .filter(Boolean);

  const onSearch = debounce(
    React.useCallback(
      (term: string) => {
        setTerm(term);
      },
      [serverOptions, searchable]
    ),
    500
  );

  const fetchOptions = React.useCallback(() => {
    api
      .post(serverOptions.url, {
        _options: {
          offset: 0,
          limit: serverOptions.limit,
          filters: [
            term && serverOptions.searchField
              ? { field: serverOptions.searchField, type: 'like', value: `%${term}%` }
              : null
          ]
            .concat(serverOptions.filters as any)
            .filter(Boolean)
        }
      })
      .then((response) => {
        setServerItems(response.data.records.map(serverOptions.mapper));
      });
  }, [serverOptions, term]);

  React.useEffect(() => {
    if (serverOptions && !options && !listName) {
      fetchOptions();
    }
  }, [serverOptions, options, listName, fetchOptions]);

  if (listName && options?.length) {
    throw new Error('Either "listName" or "options" parameter should be provided.');
  }

  if (listName && serverOptions) {
    throw new Error('Either "listName" or "serverOptions" parameter should be provided.');
  }

  if (options?.length && serverOptions) {
    throw new Error('Either "options" or "serverOptions" parameter should be provided.');
  }

  return (
    <Select
      className={className}
      disabled={disabled}
      showSearch={searchable}
      value={value}
      onChange={onChange}
      onSearch={serverOptions ? onSearch : undefined}
      filterOption={!serverOptions}
    >
      {dropDownOptions.map((option) => (
        <Select.Option key={option.value} value={option.value}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
});
