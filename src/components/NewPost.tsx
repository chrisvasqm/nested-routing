import { useState } from 'react';
import Post from '../models/Post';

interface Props {
  onSubmit: (post: Post) => void;
}

function NewPost({ onSubmit }: Props) {
  const [post, setPost] = useState<Post>({ id: 0, title: '', description: '' });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(post);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='caption'>Caption</label>
        <input
          id='caption'
          type='text'
          onChange={e => setPost({ ...post, title: e.target.value })}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default NewPost;
