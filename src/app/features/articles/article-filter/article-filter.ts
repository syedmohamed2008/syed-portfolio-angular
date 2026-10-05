import {
  Component,
  input,
  output
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Category } from '../../../core/models/category';
import { Tag } from '../../../core/models/tag';

@Component({
  selector: 'app-article-filter',
  imports: [FormsModule],
  templateUrl: './article-filter.html',
  styleUrl: './article-filter.css'
})
export class ArticleFilter {

  categories = input.required<Category[]>();

  tags = input.required<Tag[]>();

  filterChanged = output<{
    search: string;
    categoryId: string;
    tagId: string;
    sortOrder: string;
  }>();

  categoryChanged = output<string>();

  search = '';

  categoryId = '';

  tagId = '';

  sortOrder = 'desc';

  onCategoryChange(): void {

  // Previous tag may not belong to new category
  this.tagId = '';

  this.categoryChanged.emit(
    this.categoryId
  );
}


  searchArticles(): void {

    this.filterChanged.emit({

      search: this.search,

      categoryId: this.categoryId,

      tagId: this.tagId,

      sortOrder: this.sortOrder

    });

  }

}