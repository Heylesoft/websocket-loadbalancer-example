import Server from './SocketServer';

class App {
  private server:Server;

  constructor() {
    console.log("Hello App Socket");
  }

  init():void {
    this.server = new Server();
  }
}

const app: App = new App();
app.init();