import logo from './logo.svg';
import './App.css';
import './shared-components/styles.css'
import { Providers } from './Providers/Providers';

function App() {
  return (
    <Providers>

      <div className="App">
        <header className="App-header">
          <div>
            <button className="actionButton" disabled={true}>Click Me!</button>
          </div>
          <div>
            <button className="action-button button-transition" disabled={true}>Click Me!</button>
          </div>
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
    </Providers>
  );
}

export default App;
