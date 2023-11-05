import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStaysCardSingleComponent } from './home-stays-card-single.component';

describe('HomeStaysCardSingleComponent', () => {
  let component: HomeStaysCardSingleComponent;
  let fixture: ComponentFixture<HomeStaysCardSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStaysCardSingleComponent]
    });
    fixture = TestBed.createComponent(HomeStaysCardSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
