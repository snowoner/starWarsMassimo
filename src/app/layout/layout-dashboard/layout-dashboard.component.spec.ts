import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDashboardComponent } from './layout-dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SideNavService } from 'src/app/services/side-nav/side-nav.service';
import { TopBarComponent } from 'src/app/shared/components/top-bar/top-bar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from 'src/app/shared/components/side-nav/side-nav.component';

describe('LayoutDashboardComponent', () => {
  let component: LayoutDashboardComponent;
  let fixture: ComponentFixture<LayoutDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutDashboardComponent, SideNavComponent, TopBarComponent],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call changeView with innerWidth < 992', () => {
    const service = TestBed.inject(SideNavService);
    (window as any).innerWidth = 991;
    component.changeView();
    service.mode$.subscribe(mode => {
      expect(mode).toEqual('over');
    });
    service.opened$.subscribe(opened => {
      expect(opened).toBeFalsy();
    });
  });
  it('should call changeView > 992', () => {
    const service = TestBed.inject(SideNavService);
    (window as any).innerWidth = 993;
    component.changeView();
    service.mode$.subscribe(mode => {
      expect(mode).toEqual('side');
    });
    service.opened$.subscribe(opened => {
      expect(opened).toBeTruthy();
    });
  });
});
