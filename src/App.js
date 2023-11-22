import './App.css';
import HomePage from './components/Homepage';
import CoinList from './components/CoinList';
import Blog from './components/Blog';
import NavBar from './components/NavBar';
import "./NavBar.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <CoinList />
      <Blog />
    </div>
  );
}

export default App;
