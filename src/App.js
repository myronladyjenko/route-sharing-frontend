import logo from './logo.svg';
import './App.css';
import './shared-components/styles.css'
import { Providers } from './Providers/Providers';
import { AppRoutes } from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Navbar/>
        <AppRoutes/>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
