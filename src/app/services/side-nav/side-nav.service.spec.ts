import { TestBed } from '@angular/core/testing';

import { SideNavService } from './side-nav.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from 'src/app/services/data-service/data-service.service';
import { DataServiceMock } from 'src/assets/mocks/data-service/data-service.service.mock';

describe('SideNavService', () => {
  let service: SideNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    service = TestBed.inject(SideNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call toggleSideNav and set opened on true', () => {
    service.toggleSideNav();
    service.opened$.subscribe(opened => {
      expect(opened).toBeTruthy();
    });
  });
  it('should call toggleSideNav and set opened on true', () => {
    service.setMode('over');
    service.toggleSideNav();
    service.opened$.subscribe(opened => {
      expect(opened).toBeFalsy();
    });
  });
  it('should call open and set opened on true', () => {
    service.open();
    service.opened$.subscribe(opened => {
      expect(opened).toBeTruthy();
    });
  });
  it('should call close and set opened on false', () => {
    service.close();
    service.opened$.subscribe(opened => {
      expect(opened).toBeFalsy();
    });
  });
});
