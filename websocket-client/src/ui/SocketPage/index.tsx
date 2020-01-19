import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import './index.style.css';
import { UseStore } from '../../stores';

const SocketPage = observer((): ReactElement => {
  const managerStore = UseStore();

  const { messages } = managerStore.socketStore;

  const [message, setMessage] = useState<string>('');
  const [messagesList, setMessagesList] = useState<string[]>(messages);

  const onConnect = useCallback(() => {
    managerStore.socketStore.connect();
  }, [managerStore]);

  const onDisconnect = useCallback(() => {
    managerStore.socketStore.disconnect();
  }, [managerStore]);

  const onSendMessage = useCallback(() => {
    if(message.length > 0)
      managerStore.socketStore.sendMessage(message);
  }, [managerStore, message]);

  useEffect(() => {
    setMessagesList(messages);
  }, [messages]);

  const showListMessages = (): ReactElement => {
    const data: ReactElement[] = [];

    messagesList.forEach((message: string, index: number) => {
      data.push(
        <div className="SocketPage-message" key={'message-' + index}>{message}</div>
      );
    });

    return <>{data}</>;
  }

  return (
    <>
      <h1>Socket Test Client</h1>
      <div className="SocketPage-wrapperButton">
        <button className="SocketPage-button"
          onClick={onConnect}>
          Connect
        </button>
        <button className="SocketPage-button"
          onClick={onDisconnect}>
          Disconnect
        </button>
      </div>
      <div className="SocketPage-textarea">
        {showListMessages()}
      </div>
      <div>
        <input className="SocketPage-input"
          value={message}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        />
        <button className="SocketPage-button"
          onClick={onSendMessage}>Enviar</button>
      </div>
    </>
  );
});

export default SocketPage;