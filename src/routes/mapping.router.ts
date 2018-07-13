import { Router } from "../core";

class MappingRouter extends Router {
  register(): void {
    this.router.get('/', (request, response) => response.json({ mapping: true }));
  }
}

export default new MappingRouter().router;
