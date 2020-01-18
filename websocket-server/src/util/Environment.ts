import Dotenv from "dotenv";

export default class Environment {

    private static instance: Environment;
    private path: string;
  
    constructor() {
      Dotenv.config();
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
      Dotenv.config({ path:  this.path });
    }
  
    public static getInstance(): Environment {
      if (!this.instance) {
        this.instance = new Environment();
      }
      return this.instance;
    }
  
    public getVariable(name: string): string {
      return process.env[name];
    }
  }