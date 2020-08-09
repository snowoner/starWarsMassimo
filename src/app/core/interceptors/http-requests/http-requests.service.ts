import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.clearNoSpinnerHeader(req);
    return next.handle(req);
  }

  /**
   * Iterate over httpHeaders from request and delete the no-loading header
   * @param req Request to analize
   */
  private clearNoSpinnerHeader(req: HttpRequest<any>): HttpRequest<any> {
    let cloneHttpHeaders: HttpHeaders = new HttpHeaders();
    req.headers.keys().forEach((key: string) => {
      if (key !== 'UNSECURED') {
        cloneHttpHeaders = cloneHttpHeaders.append(key, req.headers.get(key));
      }
    });
    const reqMod = req.clone({
      headers: cloneHttpHeaders
    });
    return reqMod;
  }

}
