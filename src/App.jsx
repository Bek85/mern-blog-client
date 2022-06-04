import './App.css';
import TopBar from 'react-blog/components/topBar/TopBar';
import Home from 'react-blog/pages/homePage/Home';
import SinglePage from 'react-blog/pages/singlePage/SinglePage';
import Write from 'react-blog/pages/writePage/Write';

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      {/* <SinglePage /> */}
      <Write />
    </div>
  );
}

export default App;
