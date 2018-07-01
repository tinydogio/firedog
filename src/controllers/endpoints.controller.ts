import { Request, Response } from 'express';
import { Endpoint } from '../models/endpoint.model';

class EndpointsController {
  // TODO: Integrate DB. This is temporary.  :-)
  endpoints: Endpoint[] = [
    {
      name: 'Test',
      slug: 'test'
    },
    {
      name: 'A Test',
      slug: 'a-test'
    }
  ];

  list(request: Request, response: Response): void {
    response.json(this.endpoints.sort((a,  b) => {
      return a.name > b.name ? 1 : -1;
    }));
  }
}

export default new EndpointsController();
