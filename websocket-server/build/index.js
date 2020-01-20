"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SocketServer_1 = __importDefault(require("./SocketServer"));
class App {
    constructor() {
        console.log("Hello App Socket");
    }
    init() {
        this.server = new SocketServer_1.default();
    }
}
const app = new App();
app.init();
//# sourceMappingURL=index.js.map