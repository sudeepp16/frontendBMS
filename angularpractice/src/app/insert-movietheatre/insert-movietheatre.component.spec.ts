import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMovietheatreComponent } from './insert-movietheatre.component';

describe('InsertMovietheatreComponent', () => {
  let component: InsertMovietheatreComponent;
  let fixture: ComponentFixture<InsertMovietheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMovietheatreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertMovietheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
