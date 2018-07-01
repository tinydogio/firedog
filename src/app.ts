import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes';
import { MongoClient } from 'mongodb';

export class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.configure();
  }

  configure(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use('/', new Routes(this.app).register());
  }

  start(port = 3000): void {
    this.app.listen(port, () => console.log(`firedog is running on port ${ port }: http://localhost:${ port }`));
  }
}
