import {
  Component,
  computed,
  HostListener,
  inject,
  OnInit,
  signal
} from '@angular/core';

import {
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';

import { Article } from '../../../core/models/article';
import { Category } from '../../../core/models/category';
import { Tag } from '../../../core/models/tag';

import { ArticleService } from '../../../core/services/article';
import { CategoryService } from '../../../core/services/category';
import { TagService } from '../../../core/services/tag';

import { ArticleCard } from '../article-card/article-card';
import { CategoryCards } from '../category-cards/category-cards';
import { ArticleFilter } from '../article-filter/article-filter';

@Component({
  selector: 'app-article-list',

  imports: [
    CategoryCards,
    ArticleFilter,
    ArticleCard,
  ],

  templateUrl: './article-list.html',
  styleUrl: './article-list.css'
})
export class ArticleList implements OnInit  {

  private readonly articleService =
    inject(ArticleService);

   
  private readonly categoryService =
    inject(CategoryService);

  private readonly tagService =
    inject(TagService);

  readonly pageSize = 6;
  articles =
    signal<Article[]>([]);

  categories =
    signal<Category[]>([]);

  tags =
    signal<Tag[]>([]);


  selectedCategoryId =
    signal('');

  selectedTagId =
    signal('');

  search =
    signal('');

  sortOrder =
    signal('desc');

    currentPage = signal(1);

totalPages = signal(0);

isLoading = signal(false);

  totalArticles = computed(() =>

    this.categories()
      .reduce(
        (total, category) =>
          total + category.articleCount,
        0
      )

  );

  ngOnInit(): void {

  this.loadCategories();

  this.loadTags();

  this.loadArticles();

}
 
  loadCategories(): void {

    this.categoryService
      .getCategories()
      .subscribe({

        next: response => {

          this.categories.set(
            response
          );

        },

        error: error => {

          console.error(
            'Category API Error:',
            error
          );

        }

      });

  }


  

  onFilterCategoryChange(categoryId: string): void {

  this.selectedCategoryId.set(categoryId);

  this.selectedTagId.set('');

  this.loadTags(categoryId);

}

onFilterChanged(filter: {
  search: string;
  categoryId: string;
  tagId: string;
  sortOrder: string;
}): void {

  console.log(
    'Parent received filter:',
    filter
  );

  this.search.set(filter.search);

  this.selectedCategoryId.set(
    filter.categoryId
  );

  this.selectedTagId.set(
    filter.tagId
  );

  this.sortOrder.set(
    filter.sortOrder
  );

  this.currentPage.set(1);

  this.articles.set([]);

  this.loadArticles();
}

loadTags(categoryId?: string): void {

  this.tagService
    .getTags(categoryId)
    .subscribe({

       next: response => {

        console.log('Category ID:', categoryId);
        console.log('Tag response:', response);
        console.log('Is Array:', Array.isArray(response));

        this.tags.set(response);

        console.log('Tags signal:', this.tags());

      },


      error: error => {

        console.error(
          'Tag API Error:',
          error
        );

      }

    });

}

  loadArticles(append: boolean = false): void {

  if (this.isLoading()) {
    return;
  }

  this.isLoading.set(true);

  this.articleService
    .getArticles(
      this.search(),
      this.selectedCategoryId(),
      this.selectedTagId(),
      this.sortOrder(),
      this.currentPage(),
      this.pageSize
    )
    .subscribe({

      next: response => {

        if (append) {

          this.articles.update(current => [
            ...current,
            ...response.items
          ]);

        }
        else {

          this.articles.set(
            response.items
          );

        }

        this.totalPages.set(
          response.totalPages
        );

        this.isLoading.set(false);

      },

      error: error => {

        console.error(
          'Article API Error:',
          error
        );

        this.isLoading.set(false);

      }

    });

}

@HostListener('window:scroll')
onWindowScroll(): void {

  if (this.isLoading()) {
    return;
  }

  if (
    this.currentPage() >=
    this.totalPages()
  ) {
    return;
  }

  const scrollPosition =
    window.innerHeight +
    window.scrollY;

  const pageHeight =
    document.documentElement.scrollHeight;

  // Start loading before reaching exact bottom
  if (scrollPosition >= pageHeight - 300) {

    this.currentPage.update(
      page => page + 1
    );

    this.loadArticles(true);

  }

}


selectCategory(
  categoryId: string
): void {

  this.selectedCategoryId.set(
    categoryId
  );

  this.selectedTagId.set('');

  this.currentPage.set(1);

  this.articles.set([]);

  this.loadTags(
    categoryId || undefined
  );

  this.loadArticles();

}

}