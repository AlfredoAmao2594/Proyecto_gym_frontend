import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesPutComponent } from './planes-put.component';

describe('PlanesPutComponent', () => {
  let component: PlanesPutComponent;
  let fixture: ComponentFixture<PlanesPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanesPutComponent]
    });
    fixture = TestBed.createComponent(PlanesPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
