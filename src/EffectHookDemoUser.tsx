import React, { useEffect } from 'react'


/* component has many useEffect
1. component render with initial state (first render)
2. run useEffect -> call api -> set state
3. component re-render with new state (next render)

clean up function useEffect
- Clean up always run before side effect (code logic useEffect)
- Clean up runs after the component re-render or unmounts.
- Not run for component first render
*/

interface IUser {
  _id: string,
  email: string,
  role: string
}

function EffectHookDemoUser() {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [metadata, setMetadata] = React.useState({
    limit: 1,
    page: 1
  })

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user?page=${metadata.page}&limit=${metadata.limit}`)
        const data = await response.json();
        setUsers(data.data);
      } catch(err) {
        console.log("fetch user error: ", err)
      }
    }
    fetchUsers();
  }, [metadata])

  function onChangeLimit(e: React.ChangeEvent<HTMLSelectElement>) {
    setMetadata(prevState => ({
      ...prevState,
      limit: Number(e.target.value)
    }))
  }

  function onNextPage() {
    setMetadata(prevState => ({
      ...prevState,
      page: prevState.page + 1
    }))
  }

  function onPrevPage() {
    setMetadata(prevState => ({
      ...prevState,
      page: prevState.page - 1
    }))
  }

  return (
    <div style={{ width: 500 }}>
      <h3>Demo Effect Hook Show User</h3>

      <table border={1} cellPadding={0} cellSpacing={0}>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {users.length > 0 ? (
          <>
            {users.map(user => (
              <tr key={user._id}>
                <th>{user._id}</th>
                <th>{user.email}</th>
                <th>{user.role}</th>
              </tr>
            ))}
          </>
        ) : (
          <tr>
            <th colSpan={3}>No data</th>
          </tr>
        )}
      </table>

      <br />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Limit: 
          <select value={metadata.limit} onChange={onChangeLimit}>
            <option value={1}>1</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button onClick={onPrevPage}>Prev page</button>
          <span>{metadata.page}</span>
          <button onClick={onNextPage}>Next page</button>
        </div>
      </div>
    </div>
  )
}

export default EffectHookDemoUser