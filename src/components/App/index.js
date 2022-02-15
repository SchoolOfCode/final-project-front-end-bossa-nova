import Show from "../Show";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Show />
      </header>
      <h1>Testing</h1>
    </div>
  );
}

export default App;
