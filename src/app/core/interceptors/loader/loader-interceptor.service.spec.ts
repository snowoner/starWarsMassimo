import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoaderInterceptor } from './loader-interceptor.service';
import { of } from 'rxjs';

describe('LoaderInterceptor', () => {
  let service: LoaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: []
    });
    service = TestBed.inject(LoaderInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should intercept call and add http to array', () => {
    service.intercept({
      clone: () => { }, url: 'test', headers: {
        keys: () => [], has: () => false, append: () => 'test'
      }
    } as any, { handle: () => of(true) } as any).subscribe(result => { });
    expect(service.requests.length).toBe(0);
  });
  it('should intercept call and add http to array and has key', () => {
    service.intercept({
      clone: () => { }, url: 'test', headers: {
        keys: () => [], has: () => true,
        append: () => 'test'
      }
    } as any, { handle: () => of(true) } as any).subscribe(result => { });
    expect(service.requests.length).toBe(0);
  });
  it('should intercept call and add http to array and has key with value LOADER', () => {
    service.intercept({
      clone: (params) => { }, url: 'test', headers: {
        keys: () => ['NO_LOADER'], has: () =>
          true, append: () => 'test'
      }
    } as any, { handle: () => of(true) } as any).subscribe(result => { });
    expect(service.requests.length).toBe(0);
  });
  it('should intercept call and add http to array and has key with value not LOADER', () => {
    service.intercept({
      clone: (params) => { }, url: 'test', headers: {
        get: () => 'test', keys: () =>
          ['other'],
        has: () => true
      }, has: () => true, append: () => 'test'
    } as any, { handle: () => of(true) } as any).subscribe(result => { });
    expect(service.requests.length).toBe(0);
  });
});
