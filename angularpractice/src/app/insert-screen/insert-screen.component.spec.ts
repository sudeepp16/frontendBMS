import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertScreenComponent } from './insert-screen.component';

describe('InsertScreenComponent', () => {
  let component: InsertScreenComponent;
  let fixture: ComponentFixture<InsertScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
