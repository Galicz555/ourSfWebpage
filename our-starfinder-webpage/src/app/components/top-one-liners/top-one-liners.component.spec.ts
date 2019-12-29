import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOneLinersComponent } from './top-one-liners.component';

describe('TopOneLinersComponent', () => {
  let component: TopOneLinersComponent;
  let fixture: ComponentFixture<TopOneLinersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOneLinersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOneLinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
