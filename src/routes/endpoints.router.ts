import { Router } from '../core';
import endpointController from '../controllers/endpoints.controller';

class EndpointsRouter extends Router {
  register(): void {
    this.router.get('/', (request, response) => endpointController.list(request, response));
  }
}

export default new EndpointsRouter().router;
