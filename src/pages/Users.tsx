import useSWR from "swr";
import { getUsers, usersUrlEndpoint } from "../api/users";
import { Link } from "react-router-dom";

const Users = () => {
  const {
    isLoading,
    error,
    data: users,
} = useSWR(
    [usersUrlEndpoint],
    () => getUsers());

  return (
    <>
    <h1>Users</h1>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    {users && users.map((user) => (
      <div key={user.id}>
        <Link to={`/users/${user.id}`}>
          Läs {user.name} posts
        </Link>
      </div>
    ))}
    </>
  )
}

export default Users;