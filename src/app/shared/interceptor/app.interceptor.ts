import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from '../../../environments/environment';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
  req = req.clone({url: environment.baseUrl + req.url});
  return next(req);
};

