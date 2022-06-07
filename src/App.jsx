import './App.css';
import { Routes, Route } from 'react-router-dom';
import TopBar from 'react-blog/components/topBar/TopBar';
import Home from 'react-blog/pages/homePage/Home';
import SinglePage from 'react-blog/pages/singlePage/SinglePage';
import Write from 'react-blog/pages/writePage/Write';
import Register from 'react-blog/pages/register/Register';
import Settings from 'react-blog/pages/settings/Settings';
import Login from 'react-blog/pages/login/Login';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);

  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/post/:postId" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
