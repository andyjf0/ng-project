import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcesListComponent } from './forces-list.component';

describe('ForcesListComponent', () => {
  let component: ForcesListComponent;
  let fixture: ComponentFixture<ForcesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
