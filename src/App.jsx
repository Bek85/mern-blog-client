import './App.css';
import TopBar from 'react-blog/components/topBar/TopBar';
import Home from 'react-blog/pages/home/Home';
import SinglePage from 'react-blog/pages/singlePage/SinglePage';

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      <SinglePage />
    </div>
  );
}

export default App;
