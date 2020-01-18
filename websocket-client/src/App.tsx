import React from 'react';
import { SocketService } from './util';
import './App.css';
import { Context, ManagerStore } from './stores';

const App: React.FC = () => {
  const managerStore = new ManagerStore();

  const service = new SocketService();
  service.init();
  
  const OnConnect = React.useCallback(()=>{
    console.log('chat.connect()');
    service.connect();
  }, [service]);

  const OnDisconnect = React.useCallback(()=>{
    console.log('chat.disconnect()');
    service.disconnect();
  }, [service]);

  return (
    <Context.Provider value={managerStore}>
      <div className="App">
        <div className="App-content">
          <h1>Socket Test Client</h1>
          <div className="App-wrapperButton">
            <button className="App-button"
              onClick={OnConnect}>
              Connect
            </button>
            <button className="App-button"
              onClick={OnDisconnect}>
              Disconnect
            </button>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
