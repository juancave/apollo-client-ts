import './PostCard.css';

function PostCard({ data: { id, content, title, author: { email: authorEmail } } }) {
  return (
    <div className='PostCard-Container'>
      <div><strong>ID:</strong> <span>{id}</span></div>
      <div><strong>CONTENT: </strong> <span>{content}</span></div>
      <div><strong>TITLE:</strong> <span>{title}</span></div>
      <div><strong>AUTHOR:</strong> <span>{authorEmail}</span></div>
    </div>
  );
}

export default PostCard;
