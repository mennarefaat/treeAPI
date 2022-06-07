import cors from 'cors';
import { IMiddleware } from '.././interface/middleware.interface';

export class CorsMiddleware implements IMiddleware {
  getMiddleware(): any {
    return cors();
  }
}
