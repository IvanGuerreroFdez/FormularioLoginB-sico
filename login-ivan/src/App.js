import logo from './logo.svg';
import './App.css';
import Login from './componenets/Login';
import Msg from './componenets/Msg';
import React, { useState } from 'react';

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div className="App">

      <img src={logo} className="App-logo" alt="logo" />

      <h1>Formulario Login Básico</h1>
      
      {/* {loggedInUser && <Msg message={`Welcome, ${loggedInUser.name}!`} />} */}
      {loggedInUser && <Msg name={loggedInUser.name} />}
      {!loggedInUser && <Login onLogin={handleLogin} />}

      {/* <Login onLogin={loggedInUser}/> */}

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
