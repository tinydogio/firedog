import { Controller } from '../core';
import { Request, Response } from 'express';

class IndexController extends Controller {
  index(request: Request, response: Response): void {
    response.json({ expressTS: true });
  }
}

export default new IndexController();
