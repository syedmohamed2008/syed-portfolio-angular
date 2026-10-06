import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  model,
  OnInit,
  output
} from '@angular/core';

import {
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';

import {
  takeUntilDestroyed
} from '@angular/core/rxjs-interop';

import {
  Category
} from '../../../core/models/category';

import {
  Tag
} from '../../../core/models/tag';


@Component({
  selector: 'app-article-filter',

  imports: [
    FormsModule,
    ReactiveFormsModule
  ],

  templateUrl: './article-filter.html',
  styleUrl: './article-filter.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleFilter implements OnInit {

  private readonly destroyRef =
    inject(DestroyRef);


  categories =
    input.required<Category[]>();

  tags =
    input.required<Tag[]>();


  filterChanged = output<{
    search: string;
    categoryId: string;
    tagId: string;
    sortOrder: string;
  }>();


  categoryChanged = output<string>();


  searchControl =
    new FormControl('', {
      nonNullable: true
    });


  categoryId = model<string>('');

  tagId = '';

  sortOrder = 'desc';


  ngOnInit(): void {

    this.searchControl.valueChanges
      .pipe(

        debounceTime(400),

        distinctUntilChanged(),

        takeUntilDestroyed(
          this.destroyRef
        )

      )
      .subscribe(search => {

        this.emitFilter(
          search.trim()
        );

      });

  }


onCategoryChange(
  categoryId: string
): void {

  this.categoryId.set(
    categoryId
  );

  this.tagId = '';

  this.categoryChanged.emit(
    categoryId
  );

}


  searchArticles(): void {

    this.emitFilter(
      this.searchControl.value.trim()
    );

  }

private emitFilter(
  search: string
): void {

  this.filterChanged.emit({

    search: search,

    categoryId: this.categoryId(),

    tagId: this.tagId,

    sortOrder: this.sortOrder

  });

}

}