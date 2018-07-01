import { Request, Response } from 'express';

class UsersController {
  users = [
    'Tyler',
    'Mindy',
    'Tifa',
    'Joshua'
  ];

  allUsers(request: Request, response: Response): void {
    response.json(this.users.sort());
  }

  contains(request: Request, response: Response): void {
    response.json(
      this.users
        .map(user => user.toLowerCase())
        .indexOf(request.params.name.toLowerCase())
      > -1
    );
  }
}

export default new UsersController();
