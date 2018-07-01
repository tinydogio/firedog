import { Router } from '../core';
import indexController from '../controllers/index.controller';

class IndexRouter extends Router {
  register(): void {
    this.router.get('', (request, response) => indexController.index(request, response));
  }
}

export default new IndexRouter().router;
