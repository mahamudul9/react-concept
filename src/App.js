import logo from './logo.svg';
import './App.css';

function App() {
  var name="Mahamudul";
  var style={
    backgroundColor: 'white',
    color:'green',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done by Mahamudul <code>src/App.js</code> and save to reload.
        </p>
        <h2>Now you will see inshaAllah</h2>
        <h2 style={style}>My name: {name}</h2>
        <h3 style={{backgroundColor:'lightblue', color:'yellow'}}>My age: {5+19}</h3>
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
