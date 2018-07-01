import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes';

class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.configure();
  }

  configure(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use('/', new Routes().register());
  }
}

export default new App().app;
