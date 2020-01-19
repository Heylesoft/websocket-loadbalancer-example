import React from 'react';
import './App.css';
import { Context, ManagerStore } from './stores';
import SocketPage from './ui/SocketPage';

const App: React.FC = () => {
  const managerStore = new ManagerStore();  

  return (
    <Context.Provider value={managerStore}>
      <div className="App">
        <div className="App-content">
          <SocketPage />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
