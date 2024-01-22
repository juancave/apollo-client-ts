import './Users.css';
import { useQuery, gql } from '@apollo/client';
import UserCard from '../components/UserCard';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      username
    }
  }
`;

function UsersPage() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='Users-Container'>
      <strong>Current users</strong>
      <hr/><hr/>
      <div className='Users-Data-Container'>
        {data.users.map((user) => (
          <UserCard key={user.id} data={user} />
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
