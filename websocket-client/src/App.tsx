import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SocketService } from './util';

const App: React.FC = () => {
  const chat = new SocketService();
  chat.init();
  
  const OnConnect = React.useCallback(()=>{
    console.log('chat.connect()');
    chat.connect();
  }, [chat]);

  const OnDisconnect = React.useCallback(()=>{
    console.log('chat.disconnect()');
    chat.disconnect();
  }, [chat]);

  return (
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
  );
}

export default App;
