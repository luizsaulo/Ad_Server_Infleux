import React from 'react';
import Routes from './Routes/Routes';
import './Styles/main.scss';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <UserProvider>
    <Routes />
    </UserProvider>
  );
}

export default App;
