import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatestArticles } from './latest-articles';

describe('LatestArticles', () => {
  let component: LatestArticles;
  let fixture: ComponentFixture<LatestArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestArticles],
    }).compileComponents();

    fixture = TestBed.createComponent(LatestArticles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
