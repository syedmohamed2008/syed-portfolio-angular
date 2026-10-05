import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryCards } from './category-cards';

describe('CategoryCards', () => {
  let component: CategoryCards;
  let fixture: ComponentFixture<CategoryCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCards],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
