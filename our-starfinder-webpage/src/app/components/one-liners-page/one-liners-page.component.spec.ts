import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneLinersPageComponent } from './one-liners-page.component';

describe('OneLinersPageComponent', () => {
  let component: OneLinersPageComponent;
  let fixture: ComponentFixture<OneLinersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneLinersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneLinersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
