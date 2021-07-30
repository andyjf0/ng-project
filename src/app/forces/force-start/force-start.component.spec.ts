import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceStartComponent } from './force-start.component';

describe('ForceStartComponent', () => {
  let component: ForceStartComponent;
  let fixture: ComponentFixture<ForceStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
