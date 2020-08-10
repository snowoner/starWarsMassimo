import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsComponent } from './ships.component';
import { configureTestSuite } from 'src/assets/test/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ShipsService } from 'src/app/services/ships/ships.service';
import { ShipsServiceMock } from '../../../assets/mocks/ships/ships.service.mock';
import { PageEvent } from '@angular/material/paginator';

fdescribe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;

  configureTestSuite();
  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      declarations: [ ShipsComponent ],
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        {provide: ShipsService, useClass: ShipsServiceMock}
      ]
    })
    .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set paginator values', () => {
    component.pagination.page = 0;
    component.pagination.pageSize = 10;

    const paginationEvent: PageEvent = {
      previousPageIndex: 0,
      pageIndex: 1,
      pageSize: 5,
      length: 8
    };

    component.changePage(paginationEvent);
    expect(component.pagination.pageSize).toEqual(5);
    expect(component.pagination.page).toEqual(1);
  });

});
