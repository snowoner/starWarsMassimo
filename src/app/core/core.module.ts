import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestsService } from './interceptors/http-requests/http-requests.service';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { LoaderInterceptor } from './interceptors/loader/loader-interceptor.service';
import { ErrorHandlerService } from './interceptors/error-handler/error-handler.service';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    LoaderSpinnerComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestsService,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  exports: [
    LayoutModule,
    NgxSpinnerModule,
    LoaderSpinnerComponent
  ]
})
export class CoreModule { }
