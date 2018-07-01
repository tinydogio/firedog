import { readdirSync } from 'fs';
import { Router } from 'express';

export class Routes {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.processRouterFiles();
  }

  private processRouterFiles(): void {
    const files = readdirSync(__dirname);
    files
      .filter(file => file.match(/.*\.router.ts$/gm))
      .forEach(file => {
        const routeName = file.split('.')[0];
        const routePath = (routeName === 'index') ? '/' : `/${ routeName }`;
        const routes = require(`${ __dirname }/${ file }`).default;
        this.router.use(routePath, routes);
      });
  }

  register(): Router {
    return this.router;
  }
}
