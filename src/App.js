import logo from './logo.svg';
import './App.css';
import './shared-components/styles.css'
import { Providers } from './Providers/Providers';
import { AppRoutes } from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <AppRoutes/>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
