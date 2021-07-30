import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceSeniorComponent } from './force-senior.component';

describe('ForceSeniorComponent', () => {
  let component: ForceSeniorComponent;
  let fixture: ComponentFixture<ForceSeniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForceSeniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
