import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestPackagesComponent } from './home-best-packages.component';

describe('HomeBestPackagesComponent', () => {
  let component: HomeBestPackagesComponent;
  let fixture: ComponentFixture<HomeBestPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBestPackagesComponent]
    });
    fixture = TestBed.createComponent(HomeBestPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
