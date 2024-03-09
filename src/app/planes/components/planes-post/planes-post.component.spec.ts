import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesPostComponent } from './planes-post.component';

describe('PlanesPostComponent', () => {
  let component: PlanesPostComponent;
  let fixture: ComponentFixture<PlanesPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanesPostComponent]
    });
    fixture = TestBed.createComponent(PlanesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should post', () => {
    expect(component).toBeTruthy();
  });


  
});


