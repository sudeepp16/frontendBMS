import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTheatreComponent } from './user-theatre.component';

describe('UserTheatreComponent', () => {
  let component: UserTheatreComponent;
  let fixture: ComponentFixture<UserTheatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTheatreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
