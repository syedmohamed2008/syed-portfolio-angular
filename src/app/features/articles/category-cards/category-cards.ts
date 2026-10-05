import {
  Component,
  computed,
  input,
  output
} from '@angular/core';

import {
  Category
} from '../../../core/models/category';

@Component({
  selector: 'app-category-cards',

  templateUrl: './category-cards.html',
  styleUrl: './category-cards.css'
})
export class CategoryCards {

  categories =
    input.required<Category[]>();

  totalArticles =
    input.required<number>();

  selectedCategoryId =
    input<string>('');

  categorySelected =
    output<string>();


  sortedCategories = computed(() =>
    [...this.categories()].sort((a, b) =>
      a.name.trim().localeCompare(
        b.name.trim(),
        undefined,
        { sensitivity: 'base' }
      )
    )
  );



  selectCategory(
    categoryId: string
  ): void {

    this.categorySelected.emit(
      categoryId
    );

  }

}