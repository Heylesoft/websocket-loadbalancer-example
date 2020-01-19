import { createServer, Server } from 'http';
import express from 'express';
import socketIo from 'socket.io';
import { Environment } from './util';
import { EEnvironment } from './constants';

export default class SocketServer {

  private express: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string = Environment.getInstance().getVariable(EEnvironment.PORT_SERVER);

  constructor() {
    this.express = express();
    this.server = createServer(this.express);
    this.io = socketIo(this.server);

    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    this.io.on('connect', (socket: SocketIO.Socket) => {
      console.log('Connected client on port %s.', this.port);

      this.io.emit('message', 'Server: Hello ' + socket.id);

      socket.on('message', (m: string) => {
        console.log('[server](message): %s', m);
        this.io.emit('message', 'Client: ' + m);
      });

      socket.on('disconnect', () => {
        this.io.emit('message', 'Bye ' + socket.id);
        console.log('Client disconnected');
      });
    });
  }
}