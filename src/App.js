import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { GlobalProvider } from './Context/GlobalState';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container">
      <div className='row'> 
      <GlobalProvider>
        <Menu />
      <Header />
      </GlobalProvider>
       
      </div>
    </div>
  );
}

export default App;
