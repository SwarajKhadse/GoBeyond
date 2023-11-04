import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebackcontComponent } from './homebackcont.component';

describe('HomebackcontComponent', () => {
  let component: HomebackcontComponent;
  let fixture: ComponentFixture<HomebackcontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomebackcontComponent]
    });
    fixture = TestBed.createComponent(HomebackcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
