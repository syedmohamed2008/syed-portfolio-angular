import {
  Component,
  computed,
  effect,
  inject,
  signal
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { AsyncPipe, DatePipe } from '@angular/common';
import { ArticleCard } from '../article-card/article-card';
import { Observable, of, distinctUntilChanged, map } from 'rxjs';

import Prism from 'prismjs';

import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

import {
  Article
} from '../../../core/models/article';

import {
  ArticleService
} from '../../../core/services/article';
import { ArticleSummaryPipe } from '../../../shared/pipes/article-summary';

@Component({
  selector: 'app-article-detail',

  imports: [
    DatePipe,
    RouterLink,
    AsyncPipe,
    ArticleSummaryPipe,
    ArticleCard
],

  templateUrl: './article-detail.html',
  styleUrl: './article-detail.css'
})
export class ArticleDetail {

  private readonly route =
    inject(ActivatedRoute);

  private readonly articleService =
    inject(ArticleService);

  relatedArticles$: Observable<Article[]> = of([]);


  article =
    signal<Article | null>(null);

  isLoading =
    signal(true);

  errorMessage =
    signal('');


  constructor() {

    const slug =
      this.route.snapshot.paramMap.get('slug');

    if (!slug) {

      this.errorMessage.set(
        'Article not found.'
      );

      this.isLoading.set(false);

      return;
    }

    this.loadArticle(slug);


    effect(() => {

      const article =
        this.article();

      if (!article) {
        return;
      }

      // Wait until Angular renders [innerHTML]
      setTimeout(() => {
        Prism.highlightAll();
      });

    });

  }

  ngOnInit(): void {

  this.route.paramMap
    .pipe(
      map(params => params.get('slug')),
      distinctUntilChanged()
    )
    .subscribe(slug => {

      if (slug) {
        this.loadArticle(slug);
      }

    });
}

  readingTime = computed(() => {

    const article = this.article();

    if (!article?.content) {
        return 0;
    }

    // Remove HTML tags
    const plainText = article.content
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ')
        .trim();

    if (!plainText) {
        return 0;
    }

    const wordCount =
        plainText.split(/\s+/).length;

    return Math.ceil(wordCount / 200);
});


  loadArticle(slug: string): void {

    this.isLoading.set(true);

    this.articleService
      .getArticleBySlug(slug)
      .subscribe({

        next: response => {

          this.article.set(response);

          this.relatedArticles$ =
          this.articleService.getRelatedArticles(
            response.categoryId,
            response.id
          );


          this.isLoading.set(false);

        },

        error: error => {

          console.error(
            'Article Detail API Error:',
            error
          );

          this.errorMessage.set(
            'Unable to load article.'
          );

          this.isLoading.set(false);

        }

      });

  }

}