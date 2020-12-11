import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonListComponent } from './don-list.component';

describe('DonListComponent', () => {
  let component: DonListComponent;
  let fixture: ComponentFixture<DonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
