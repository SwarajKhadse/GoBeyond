import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStaysCardsComponent } from './home-stays-cards.component';

describe('HomeStaysCardsComponent', () => {
  let component: HomeStaysCardsComponent;
  let fixture: ComponentFixture<HomeStaysCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStaysCardsComponent]
    });
    fixture = TestBed.createComponent(HomeStaysCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
