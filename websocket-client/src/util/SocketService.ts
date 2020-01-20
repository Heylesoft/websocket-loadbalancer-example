import io from 'socket.io-client';

export default class SocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  public init():void {
    this.socket = io('localhost:8081', {
      autoConnect: false
    });
  }

  public connect(): void {
    this.socket.connect();
  }

  public disconnect(): void {
    this.socket.disconnect();
  }
}