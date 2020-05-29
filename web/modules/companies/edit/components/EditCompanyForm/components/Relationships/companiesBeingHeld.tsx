import * as React from 'react';
import { debounce, uniqBy } from 'lodash';
import { api } from 'modules/api';
import { useSelector } from 'react-redux';
import { MultiSelectAutoSuggest } from 'components/Select';
import { companiesListSelectors } from 'modules/companies/list';

interface Props {
  value: string[];
  onChange: (value: string[]) => any;
  holdingId: number;
}

export const CompaniesBeingHeld = React.memo((props: Props) => {
  const { value, onChange, holdingId } = props;
  const companies = useSelector(companiesListSelectors.getEntity);
  const plainCompanies = companies.getValue();
  const [list, setList] = React.useState([]);
  const [text, setText] = React.useState('');

  const fetchSuggestions = React.useCallback(
    (text: string) => {
      api
        .post('/company-list', {
          _options: {
            filters: [{ field: 'name', type: 'like', value: `%${text}%` }]
          }
        })
        .then((response) => {
          setList(
            response.data.records.map((record) => ({
              text: record.name,
              value: record.id.toString(),
              disabled: record.is_holding || (record.holding_id && record.holding_id !== holdingId),
              title: record.is_holding
                ? 'Holding company cannot be added to another holding.'
                : !!record.holding_id &&
                  +record.holding_id !== +holdingId &&
                  'This company has been already added to another holding'
            }))
          );
        });
    },
    [value]
  );

  React.useEffect(() => fetchSuggestions(''), []);

  React.useEffect(() => fetchSuggestions(text), [text]);

  const valueOptions = Array.isArray(plainCompanies)
    ? plainCompanies
        .filter((i) => (value || []).some((j) => +j === +i.id))
        .map((i) => ({ text: i.name, value: i.id.toString() }))
    : [];

  const onSearchItems = debounce((text: string) => setText(text), 500);

  return (
    <MultiSelectAutoSuggest
      value={value}
      valueTitle="Add Company"
      options={uniqBy(
        valueOptions.concat(list).sort((a, b) => a.text.localeCompare(b.text)),
        'value'
      )}
      onChange={onChange}
      onSearch={onSearchItems}
    />
  );
});
