import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderSpinnerComponent } from './loader-spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderService } from '../../../services/loader/loader.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoaderServiceMock } from 'src/assets/mocks/loader/loaderService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, BehaviorSubject } from 'rxjs';

describe('LoaderSpinnerComponent', () => {
  let component: LoaderSpinnerComponent;
  let fixture: ComponentFixture<LoaderSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderSpinnerComponent],
      imports: [
        HttpClientTestingModule,
        NgxSpinnerModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: LoaderService, useClass: LoaderServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get loader status and get true', () => {
    const service = TestBed.inject(LoaderService);
    service.isLoading = new BehaviorSubject(true);
    component.ngOnInit();
    service.isLoading.subscribe(loading => {
      expect(loading).toBeTruthy();
    });
  });
});
