import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDivComponent } from './explore-div.component';

describe('ExploreDivComponent', () => {
  let component: ExploreDivComponent;
  let fixture: ComponentFixture<ExploreDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreDivComponent]
    });
    fixture = TestBed.createComponent(ExploreDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
