import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonDetalisComponent } from './don-detalis.component';

describe('DonDetalisComponent', () => {
  let component: DonDetalisComponent;
  let fixture: ComponentFixture<DonDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
