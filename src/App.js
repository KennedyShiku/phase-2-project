import './App.css';
import HomePage from './components/Homepage';
import CoinList from './components/CoinList';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <HomePage />
      <CoinList />
      <Blog />
    </div>
  );
}

export default App;
