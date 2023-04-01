import { Link, Outlet, useNavigate } from 'react-router-dom';
import Post from '../models/Post';

interface Props {
  posts: Post[];
}

function Posts({ posts }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => navigate('/posts/new')}>New Post</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Posts;
