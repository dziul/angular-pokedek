import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'platform',
})
export class HttpsRequestInterceptor implements HttpInterceptor {
  private urlApi = environment.urlApi;
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const path = request.url;
    const url = /^https?:\/\//.test(path) ? path : `${this.urlApi}${path}`;
    const requestModified = request.clone({
      url,
      setHeaders: {
        /* header modificado */
      },
    });
    return next.handle(requestModified); // testar o tratamento da response, com pipe
  }
}
