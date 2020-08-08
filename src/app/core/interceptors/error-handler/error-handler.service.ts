import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap((res: any) => {
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
        this.spinner.hide();
        if (err.status === 403 || err.status === 401) {
          this.router.navigate(['error', err.error.message ? err.error.message : err.error.messages[0], 'authorization']);
        } else {
          this.router.navigate(['error', err.error.message ? err.error.message : err.error.messages[0], 'internal-error']);
        }
      }
    }
    ));
  }
}
