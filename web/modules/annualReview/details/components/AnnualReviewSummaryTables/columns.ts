export const createColumns = (item) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: item.quarter1_info.label,
    dataIndex: 'quarter1',
    key: 'quarter1',
    align: 'right'
  },
  {
    title: item.quarter2_info.label,
    dataIndex: 'quarter2',
    key: 'quarter2',
    align: 'right'
  },
  {
    title: item.quarter3_info.label,
    dataIndex: 'quarter3',
    key: 'quarter3',
    align: 'right'
  },
  {
    title: item.quarter4_info.label,
    dataIndex: 'quarter4',
    key: 'quarter4',
    align: 'right'
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    align: 'right'
  }
];
