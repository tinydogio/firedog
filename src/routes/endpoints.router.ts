import { Router } from 'express';
import endpointController from '../controllers/endpoints.controller';

class EndpointsRouter {
  public readonly router: Router;

  constructor() {
    this.router = Router();
    this.register();
  }

  register(): void {
    this.router.get('/', (request, response) => endpointController.list(request, response));
  }
}

export default new EndpointsRouter().router;
