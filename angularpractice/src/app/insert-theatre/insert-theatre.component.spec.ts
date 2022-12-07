import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTheatreComponent } from './insert-theatre.component';

describe('InsertTheatreComponent', () => {
  let component: InsertTheatreComponent;
  let fixture: ComponentFixture<InsertTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTheatreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
