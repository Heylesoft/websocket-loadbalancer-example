import io from 'socket.io-client';
import { action, IObservableArray, observable } from 'mobx';

enum EStateSocket {
  CONNECTED,
  DISCONNECTED
}

class SocketStore {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  @observable
  state: EStateSocket = EStateSocket.DISCONNECTED;

  @observable
  messages: IObservableArray<string> = observable([]);

  constructor(){
    this.socket = io('172.20.10.2:9090', {
      transports: ['websocket'],
      autoConnect: false
    });

    this.socket.on('message', (data:string) => this.receiveMessage(data));
  }

  @action.bound
  public connect():void {
    this.socket.connect();
    this.state = EStateSocket.CONNECTED;
  }

  @action.bound
  public disconnect():void {
    this.socket.disconnect();
    this.state = EStateSocket.DISCONNECTED;
    this.messages.clear();
  }

  public sendMessage(message: string):void {
    this.socket.emit('message', message);
  }

  @action.bound
  public receiveMessage(data:string):void {
    this.messages.push(data);
  }
}

export {
  SocketStore,
  EStateSocket
}