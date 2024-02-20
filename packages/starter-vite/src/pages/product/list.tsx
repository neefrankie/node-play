import { getDefaultSortOrder, useMany, useNavigation, } from '@refinedev/core'
import { useTable, EditButton, ShowButton } from '@refinedev/antd';
// import { Link } from 'react-router-dom';
import { Table, Space } from 'antd';

export const ListProducts = () => {
//   const { data, isLoading } = useList({ 
//     resource: 'products',
//     pagination: {
//       current: 1,
//       pageSize: 10,
//     },
//     sorters: [
//       { field: 'name', order: 'asc'}
//     ],
//     filters: [
//       { field: 'material', operator: 'eq', value: 'Aluminum' }
//     ]
//   });

  const {
    tableQueryResult: { data, isLoading },
    // current,
    // setCurrent,
    // pageCount,
    sorters,
    // setSorters,
    tableProps,
  } = useTable({
    // resource: 'protected-products',
    pagination: { current: 1, pageSize: 10 },
    sorters: {
      initial: [
        { field: 'id', order: 'asc'}
      ]
    },
    syncWithLocation: true,
  });

//   const { showUrl, editUrl } = useNavigation();

  const {
    data: categories
  } = useMany({
    resource: 'categories',
    ids: tableProps?.dataSource?.map((product) => product.category?.id) ?? []
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

//   const onPrevious = () => {
//     if (current > 1) {
//       setCurrent(current - 1);
//     }
//   };

//   const onNext = () => {
//     if (current < pageCount) {
//       setCurrent(current + 1);
//     }
//   };

//   const onPage = (page: number) => {
//     setCurrent(page);
//   };

//   const getSorter = (field: string) => {
//     const sorter = sorters?.find((sorter) => sorter.field === field);

//     if (sorter) {
//       return sorter.order;
//     }
//   };

//   const onSort = (field: string) => {
//     const sorter = getSorter(field);
//     setSorters(
//       sorter === 'desc' ? [] : [
//         {
//           field,
//           order: sorter === 'asc' ? 'desc' : 'asc',
//         },
//       ]
//     );
//   }

//   const indicator = { asc: "⬆️", desc: "⬇️" };

  return (
    <div>
      <h1>Products</h1>
      <Table {...tableProps} rowKey="id">
        <Table.Column 
          dataIndex="id" 
          title="ID"
          sorter
          defaultSortOrder={getDefaultSortOrder('id', sorters)}
        />
        <Table.Column 
          dataIndex="name" 
          title="Name" 
          defaultSortOrder={getDefaultSortOrder('name', sorters)}
        />
        <Table.Column
          dataIndex={["category", "id"]}
          title="Category"
          render={(value) => {
            if (isLoading) {
              return 'Loading...';
            }

            return categories?.data?.find((category) => category.id == value)?.title
          }}
        />
        <Table.Column dataIndex="material" title="Material" />
        <Table.Column dataIndex="price" title="Price" />
        <Table.Column
          title="Actions"
          render={(_, record) => (
            <Space>
              <ShowButton hideText size='small' recordItemId={record.id} />
              <EditButton hideText size='small' recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
      {/* <table>
        <thead>
          <tr>
            <th onClick={() => onSort('id')}>
              ID {indicator[getSorter('id')]}
            </th>
            <th onClick={() => onSort('name')}>
              Name {indicator[getSorter('name')]}
            </th>
            <th>Category</th>
            <th onClick={() => onSort('material')}>
              Material {indicator[getSorter('material')]}
            </th>
            <th onClick={() => onSort('price')}>
              Price {indicator[getSorter('price')]}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((product) =>(
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                {
                  categories?.data?.find(
                    (category) => category.id == product.category?.id
                  )?.title
                }
              </td>
              <td>{product.material}</td>
              <td>{product.price}</td>
              <td>
                <Link to={showUrl("protected-products", product.id)}>Show</Link>
                <Link to={editUrl("protected-products", product.id)}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      {/* <div className='pagination'>
        <button type='button' onClick={onPrevious}>
          {'<'}
        </button>
        <div>
          {current - 1 > 0 && (
            <span onClick={() => onPage(current - 1)}>
              {current - 1}
            </span>
          )}
          <span className='current'>{current}</span>
          {current + 1 < pageCount && (
            <span onClick={() => onPage(current + 1)}>
              {current + 1}
            </span>
          )}
        </div>
        <button type='button' onClick={onNext}>
          {'>'}
        </button>
      </div> */}
    </div>
  )
}
