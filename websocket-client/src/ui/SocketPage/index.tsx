import React, { ReactElement, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import './index.style.css';
import { UseStore } from '../../stores';

const SocketPage = observer((): ReactElement => {
  const managerStore = UseStore();

  const { messages } = managerStore.socketStore; 

  const [messagesList, setMessagesList] = useState<string[]>(messages);

  const OnConnect = React.useCallback(()=>{
    console.log('chat.connect()');
    managerStore.socketStore.connect();
  }, [managerStore]);

  const OnDisconnect = React.useCallback(()=>{
    console.log('chat.disconnect()');
    managerStore.socketStore.disconnect();
  }, [managerStore]);

  useEffect(() => {
    setMessagesList(messages);
  }, [messages]);

  const showListMessages = ():ReactElement => {
    const data: ReactElement[] = [];

    messagesList.forEach((message:string, index:number) => {
      data.push(
        <span key={'message-'+index}>{message}</span>
      );
    });

    return <>{data}</>;
  }

  return(
    <>
      <h1>Socket Test Client</h1>
      <div className="SocketPage-wrapperButton">
        <button className="SocketPage-button"
          onClick={OnConnect}>
          Connect
        </button>
        <button className="SocketPage-button"
          onClick={OnDisconnect}>
          Disconnect
        </button>
      </div>
      <div className="SocketPage-textarea">
       { showListMessages()} 
      </div>
    </>
  );
});

export default SocketPage;