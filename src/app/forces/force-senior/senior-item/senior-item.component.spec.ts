import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorItemComponent } from './senior-item.component';

describe('SeniorItemComponent', () => {
  let component: SeniorItemComponent;
  let fixture: ComponentFixture<SeniorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
