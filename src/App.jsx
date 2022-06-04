import './App.css';
import TopBar from 'react-blog/components/topBar/TopBar';
import Home from 'react-blog/pages/home/Home';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
    </div>
  );
}

export default App;
