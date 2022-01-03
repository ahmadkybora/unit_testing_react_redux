import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import User from './components/User';

function App() {
  const success = useSelector(state => state.success);

  return (
    <div className="App">
      <User />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
