import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Root from './components/Root';
import NotFound from './components/NotFound';
import About from './components/About';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    { id: 1, title: 'Title 1', description: 'Description 1' },
    { id: 2, title: 'Title 2', description: 'Description 2' },
    { id: 3, title: 'Title 3', description: 'Description 3' }
  ]);

  return (
    <>
      <nav>
        <h1>NavBar</h1>
        <ul>
          <li onClick={() => navigate('/')}>Root</li>
          <li onClick={() => navigate('/about')}>About</li>
          <li onClick={() => navigate('/posts')}>Posts</li>
        </ul>
      </nav>

      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Root />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts posts={posts} />}>
          <Route
            path='new'
            element={
              <NewPost
                onSubmit={post => {
                  post.id = posts.length + 1;
                  setPosts([...posts, post]);
                }}
              />
            }
          />
          <Route path=':id' element={<EditPost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
