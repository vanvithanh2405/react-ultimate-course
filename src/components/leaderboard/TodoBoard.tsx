import { useNavigate, useSearchParams } from 'react-router';
import { useTable } from '../../hooks/useTable';

/* show list product
- show list data
- pagination: page, limit
- search
- order by column: asc, desc
*/
function TodoBoard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const _page = searchParams.get('page');
  const _limit = searchParams.get('limit');
  const {
    dataSource,
    pagination,
    onChangePrevPage,
    onChangeNextPage,
    onChangeLimit
  } = useTable({
    path: 'todos',
    page: _page ? Number(_page) : undefined,
    limit: _limit ? Number(_limit) : undefined
  });

  return (
    <div>
      <h2>TodoBoard</h2>

      <div className="relative overflow-x-auto w-[500px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Completed
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((data: any) => (
              <tr key={data.id} className="bg-white border-b border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {data.title}
                </th>
                <td className="px-6 py-4">
                  {data.completed ? 'Completed' : 'New'}
                </td>
                <td className="px-6 py-4">
                  <button 
                    type="button" 
                    className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm" 
                    onClick={() => navigate(`todo/${data.id}`)}
                  >
                    Show Detail
                  </button>
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

export default TodoBoard