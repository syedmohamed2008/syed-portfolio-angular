import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleFilter } from './article-filter';

describe('ArticleFilter', () => {
  let component: ArticleFilter;
  let fixture: ComponentFixture<ArticleFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
