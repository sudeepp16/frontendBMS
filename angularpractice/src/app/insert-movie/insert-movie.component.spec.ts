import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMovieComponent } from './insert-movie.component';

describe('InsertMovieComponent', () => {
  let component: InsertMovieComponent;
  let fixture: ComponentFixture<InsertMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
