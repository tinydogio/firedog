import { Router } from 'express';
import usersController from '../controllers/users.controller';

class UsersRouter {
  public readonly router: Router;

  constructor() {
    this.router = Router();
    this.register();
  }

  register(): void {
    this.router.get('/', (request, response) => usersController.allUsers(request, response));
    this.router.get('/contains/:name', (request, response) => usersController.contains(request, response));
  }
}

export default new UsersRouter().router;
