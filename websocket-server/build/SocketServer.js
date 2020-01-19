"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const util_1 = require("./util");
const constants_1 = require("./constants");
class SocketServer {
    constructor() {
        this.port = util_1.Environment.getInstance().getVariable(constants_1.EEnvironment.PORT_SERVER);
        this.express = express_1.default();
        this.server = http_1.createServer(this.express);
        this.io = socket_io_1.default(this.server);
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
        this.io.on('connect', (socket) => {
            console.log('Connected client on port %s.', this.port);
            this.io.emit('message', '> Server: Hello ' + socket.id);
            socket.on('message', (m) => {
                console.log('[server](message): %s', m);
                this.io.emit('message', '> ' + socket.id + ': ' + m);
            });
            socket.on('disconnect', () => {
                this.io.emit('message', 'Bye ' + socket.id);
                console.log('Client disconnected');
            });
        });
    }
}
exports.default = SocketServer;
//# sourceMappingURL=SocketServer.js.map