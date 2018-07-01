import { Router } from 'express';
import indexController from '../controllers/index.controller';

class IndexRouter {
  public readonly router: Router;

  constructor() {
    this.router = Router();
    this.register();
  }

  register(): void {
    this.router.get('', (request, response) => indexController.index(request, response));
  }
}

export default new IndexRouter().router;
