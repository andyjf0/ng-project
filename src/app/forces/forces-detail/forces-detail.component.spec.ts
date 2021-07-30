import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcesDetailComponent } from './forces-detail.component';

describe('ForcesDetailComponent', () => {
  let component: ForcesDetailComponent;
  let fixture: ComponentFixture<ForcesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
