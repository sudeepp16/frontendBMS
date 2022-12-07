import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTheaterComponent } from './reg-theater.component';

describe('RegTheaterComponent', () => {
  let component: RegTheaterComponent;
  let fixture: ComponentFixture<RegTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTheaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
