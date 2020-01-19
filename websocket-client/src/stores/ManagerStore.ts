import { SocketStore } from "./services/SocketStore";

class ManagerStore {
  public socketStore: SocketStore;

  constructor() {
    this.socketStore = new SocketStore();
  }

}

export default ManagerStore;