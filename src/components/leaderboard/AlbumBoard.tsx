import { useTable } from '../../hooks/useTable';

/* show list product
- show list data
- pagination: page, limit
- search
- order by column: asc, desc
*/
function AlbumBoard() {
  const {
    dataSource,
    pagination,
    onChangePrevPage,
    onChangeNextPage,
    onChangeLimit
  } = useTable({
    path: 'albums',
    limit: 5
  });

  return (
    <div>
      <h2>AlbumBoard</h2>

      <div className="relative overflow-x-auto w-[1000px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map(data => (
              <tr key={data.id} className="bg-white border-b border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {data.id}
                </th>
                <td className="px-6 py-4">
                  {data.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />

        <div className='flex justify-between'>
          <div>
            <button 
              type="button" 
              onClick={onChangePrevPage}
            >
              Prev
            </button>
            <span>{pagination.page}</span>
            <button 
              type="button"
              onClick={onChangeNextPage}
            >
              Next
            </button>
          </div>
          <div>
            Limit 
            <select
              value={pagination.limit}
              onChange={(e) => onChangeLimit(parseInt(e.target.value))}
            >
              <option value={3}>3</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>
        </div>

      </div>


    </div>
  )
}

export default AlbumBoard