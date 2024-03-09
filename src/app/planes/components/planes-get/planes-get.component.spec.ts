import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesGetComponent } from './planes-get.component';

describe('PlanesGetComponent', () => {
  let component: PlanesGetComponent;
  let fixture: ComponentFixture<PlanesGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanesGetComponent]
    });
    fixture = TestBed.createComponent(PlanesGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
