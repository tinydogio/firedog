import { Request, Response } from 'express';

class IndexController {
  index(request: Request, response: Response): void {
    response.json({ expressTS: true });
  }
}

export default new IndexController();
