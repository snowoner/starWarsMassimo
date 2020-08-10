// import { TestBed, inject } from '@angular/core/testing';

// import { AuthenticationGuard } from './authentication.guard';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { AuthenticationServiceMock } from 'src/assets/mocks/authentication/authentication-service';
// import { RouterTestingModule } from '@angular/router/testing';
// import { DataService } from 'src/services/data-service/data-service.service';
// import { DataServiceMock } from 'src/assets/mocks/data-service/data-service.service.mock';
// import { AuthenticationService } from 'src/services/authentication/authentication.service';

// describe('AuthenticationGuard', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule,
//         RouterTestingModule
//       ],
//       providers: [
//         AuthenticationGuard,
//         { provide: DataService, useClass: DataServiceMock },
//         { provide: AuthenticationService, useClass: AuthenticationServiceMock }
//       ]
//     });
//   });

//   it('should create component', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
//     expect(guard).toBeTruthy();
//   }));
// });
