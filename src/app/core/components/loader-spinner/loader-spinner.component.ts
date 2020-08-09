import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { debounceTime, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderSpinnerComponent implements OnInit {
  /**
   *
   * @param spinner Inject spinner service
   * @param loaderService Inject loaderService
   */
  constructor(private spinner: NgxSpinnerService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.isLoading
      .pipe(
        tap(val => { this.spinner.show(); }),
        debounceTime(300)
      )
      .subscribe((value) => {
        if (value) {
          this.spinner.show();
        } else {
          this.spinner.hide();
        }
      });
  }
}
