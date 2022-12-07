import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegmovieComponent } from './regmovie.component';

describe('RegmovieComponent', () => {
  let component: RegmovieComponent;
  let fixture: ComponentFixture<RegmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
