import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcesItemComponent } from './forces-item.component';

describe('ForcesItemComponent', () => {
  let component: ForcesItemComponent;
  let fixture: ComponentFixture<ForcesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
