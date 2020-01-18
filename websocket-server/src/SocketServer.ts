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

    this.io.on('connect', (socket: any) => {
      console.log('Connected client on port %s.', this.port);

      socket.on('message', (m: string) => {
        console.log('[server](message): %s', m);
        this.io.emit('message', m);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }
}