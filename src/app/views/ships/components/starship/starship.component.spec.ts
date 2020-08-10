import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipComponent } from './starship.component';
import { configureTestSuite } from 'src/assets/test/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogMock } from 'src/app/shared/components/confirmation-dialog/mat-dialog.mock';
import { MaterialModule } from 'src/app/material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

describe('StarshipComponent', () => {
  let component: StarshipComponent;
  let fixture: ComponentFixture<StarshipComponent>;

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      declarations: [StarshipComponent, ConfirmationDialogComponent],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: MatDialog, useValue: new MatDialogMock() },
      ]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: { entryComponents: [ConfirmationDialogComponent] }
      })
      .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipComponent);
    component = fixture.componentInstance;
    component.ship = {
      id: null,
      name: 'InterEstelar',
      model: 'InterEstelar',
      starship_class: 'Fight',
      passengers: '10',
      max_atmosphering_speed: '1000 km/h'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
