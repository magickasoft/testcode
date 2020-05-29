import * as React from 'react';
import { ConnectedTable } from 'modules/tables';
import { Link } from 'components/Link';

export const columns = () => [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name'
  },
  {
    align: 'center',
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name'
  },
  {
    align: 'center',
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    align: 'center',
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    align: 'center',
    title: 'Companies',
    dataIndex: 'companies',
    key: 'companies'
  },
  {
    align: 'center',
    title: 'Permisson',
    dataIndex: 'permission',
    key: 'permission'
  },
  {
    align: 'center',
    title: 'Created',
    dataIndex: 'created',
    key: 'created'
  },
  {
    align: 'center',
    title: 'Last Login',
    dataIndex: 'last_login',
    key: 'last_login'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action'
  }
];

interface Properties {
  companyId: number;
}

const ClientPortalUsersTable = React.memo((properties: Properties) => {
  const { companyId } = properties;

  const clientPortalUsersSelector = React.useCallback(
    () => [
      {
        first_name: 'Andrey',
        last_name: 'Barkanov',
        email: 'andrey.barkanov@gmail.com',
        phone: '+1 995 601 84 59',
        companies: '2',
        permission: 'admin',
        created: '5/9/2019 6:39 AM',
        last_login: '5/9/2019 6:39 AM'
      }
    ],

    // if (!data) {
    //   return [];
    // }
    //
    // return data.accountSigners.records;
    []
  );

  return (
    <>
      <ConnectedTable
        sectionProperties={{
          title: 'Client Users',
          actions: (
            <Link rounded button to="#" face={Link.FACE_DEFAULT}>
              ADD NEW
            </Link>
          )
        }}
        columns={columns}
        storePath="company-clientPortalUsers"
        dataSources={[
          {
            key: 'accountSigners',
            url: '/contact-metadata-list',
            handler: () => ({ company_id: companyId })
          }
        ]}
        dataSourceSelector={clientPortalUsersSelector}
      />
      <Link to="/">View All Client Portal Users</Link>
    </>
  );
});

export { ClientPortalUsersTable };
