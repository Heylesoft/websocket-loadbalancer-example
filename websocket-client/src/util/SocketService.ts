import io from 'socket.io-client';

export default class SocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  public init(): SocketService {
    this.socket = io('localhost:8081');
    return this;
  }
}