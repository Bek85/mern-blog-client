import './App.css';
import TopBar from 'react-blog/components/topBar/TopBar';
import Home from 'react-blog/pages/homePage/Home';
import SinglePage from 'react-blog/pages/singlePage/SinglePage';
import Write from 'react-blog/pages/writePage/Write';
// import Settings from 'react-blog/pages/settings/Settings';
import Login from 'react-blog/pages/login/Login';

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      {/* <SinglePage /> */}
      {/* <Write /> */}
      <Login />
      {/* <Settings /> */}
    </div>
  );
}

export default App;
