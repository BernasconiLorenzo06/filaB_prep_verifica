import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableListComponent } from './vegetable-list.component';

describe('VegetableListComponent', () => {
  let component: VegetableListComponent;
  let fixture: ComponentFixture<VegetableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegetableListComponent]
    });
    fixture = TestBed.createComponent(VegetableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
