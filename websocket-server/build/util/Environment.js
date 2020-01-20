"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
class Environment {
    constructor() {
        dotenv_1.default.config();
        switch (process.env.NODE_ENV) {
            case "test":
                this.path = `${__dirname}/../../.env.test`;
                break;
            case "production":
                this.path = `${__dirname}/../../.env.production`;
                break;
            default:
                this.path = `${__dirname}/../../.env.development`;
        }
        dotenv_1.default.config({ path: this.path });
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Environment();
        }
        return this.instance;
    }
    getVariable(name) {
        return process.env[name];
    }
}
exports.default = Environment;
//# sourceMappingURL=Environment.js.map