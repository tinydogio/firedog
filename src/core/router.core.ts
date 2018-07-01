import * as express from 'express';

export class Router {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.register();
  }

  register(): void {
    console.warn(`Router has been created but register method has not been overwritten.`);
  }
}
