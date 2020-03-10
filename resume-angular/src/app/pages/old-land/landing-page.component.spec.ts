import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldLandingPageComponent } from './landing-page.component';

describe('OldLandingPageComponent', () => {
  let component: OldLandingPageComponent;
  let fixture: ComponentFixture<OldLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
