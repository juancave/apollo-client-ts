import './Posts.css';
import { useQuery, gql } from '@apollo/client';
import PostCard from '../components/PostCard';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      content
      title
      author {
        id
        email
      }
    }
  }
`;

function PostsPage() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='Posts-Container'>
      <strong>Current posts</strong>
      <hr/><hr/>
      <div className='Posts-Data-Container'>
        {data.posts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
