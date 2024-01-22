import './UserCard.css';

function UserCard({ data: { id, email, username } }) {
  return (
    <div className='UserCard-Container'>
      <div><strong>ID:</strong> <span>{id}</span></div>
      <div><strong>EMAIL: </strong> <span>{email}</span></div>
      <div><strong>USERNAME:</strong> <span>{username}</span></div>
    </div>
  );
}

export default UserCard;
