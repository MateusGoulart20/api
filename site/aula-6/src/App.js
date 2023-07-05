import logo from './logo.svg';
import './App.css';
import React from 'react';
import BrowserRouter from 'react-router-dom';
import Routes from 'react-router-dom';
import Route from 'react-router-dom';  
import Login from './pages/Login';

function App() {
  return (
<>
<div>
<Router>
<Routes>
<Route path="/"Component={Login}></Route>
</Routes>
</Router>
</div>
    <div className="App">
      <header className="App-header">
        <img src={logo} />
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
</>);
}

export default App;
