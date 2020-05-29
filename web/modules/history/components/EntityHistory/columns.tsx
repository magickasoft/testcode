import * as React from 'react';
import { Switch } from 'react-router-dom';
import { DialogRoute } from 'components/Dialog';
import { DateTime } from 'components/DateTime';
import { Link } from 'components/Link';
import { getNameByEntityType } from 'modules/history';
import { HistoryRecordDetails } from './HistoryRecordDetails';

export const columns = (showTypeColumn?: boolean) => () => {
  const actions = {
    '1': 'Create',
    '2': 'Update',
    '3': 'Delete'
  };

  const usersTypes = {
    '0': 'Unknown',
    '1': 'Bank Portal User',
    '2': 'Client Portal User',
    '3': 'System User'
  };

  return [
    {
      title: 'User',
      align: 'center',
      dataIndex: 'user_email',
      key: 'user_email',
      width: '170px',
      render: (_, { user_email, user_type, user_first_name, user_last_name }) => (
        <div>
          {user_email}
          {(user_first_name || user_last_name) && <div>{`(${user_first_name} ${user_last_name})`.trim()}</div>}
          <div>
            <i>{usersTypes[user_type]}</i>
          </div>
        </div>
      )
    },
    {
      title: 'Date',
      align: 'center',
      dataIndex: 'created_at',
      key: 'created_at',
      width: '170px',
      render: (created_at) => !!created_at && <DateTime utc={created_at} dateFormat="YYYY/MM/DD" />
    },
    {
      title: 'Action',
      align: 'center',
      dataIndex: 'action',
      key: 'action',
      width: '100px',
      render: (action) => actions[action]
    },
    showTypeColumn
      ? {
          title: 'Entity Type',
          align: 'center',
          dataIndex: 'entity_type',
          key: 'entity_type',
          width: '200px',
          render: (entity_type) => getNameByEntityType(entity_type)
        }
      : null,
    {
      title: 'Details',
      dataIndex: 'id',
      key: 'id',
      render: (_, { details, action }) => <HistoryRecordDetails items={details} actionType={action} />
    }
  ].filter(Boolean);
};
