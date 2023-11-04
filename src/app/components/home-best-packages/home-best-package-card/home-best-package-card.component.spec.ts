import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestPackageCardComponent } from './home-best-package-card.component';

describe('HomeBestPackageCardComponent', () => {
  let component: HomeBestPackageCardComponent;
  let fixture: ComponentFixture<HomeBestPackageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBestPackageCardComponent]
    });
    fixture = TestBed.createComponent(HomeBestPackageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
