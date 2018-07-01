import { Router } from '../core';
import usersController from '../controllers/users.controller';

class UsersRouter extends Router {
  register(): void {
    this.router.get('/', (request, response) => usersController.allUsers(request, response));
    this.router.get('/contains/:name', (request, response) => usersController.contains(request, response));
  }
}

export default new UsersRouter().router;
