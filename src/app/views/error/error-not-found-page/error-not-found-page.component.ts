import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-not-found-page',
  templateUrl: './error-not-found-page.component.html',
  styleUrls: ['./error-not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ErrorNotFoundPageComponent implements OnInit {

  error: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.error = params.error;
    });
  }
}
