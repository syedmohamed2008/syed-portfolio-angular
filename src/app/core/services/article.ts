import {
  inject,
  Injectable
} from '@angular/core';

import {
  HttpClient,
  HttpParams
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  API_CONFIG
} from '../config/api.config';

import { PagedResult } from '../models/paged-result';

import {
  Article
} from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly http =
    inject(HttpClient);


  getArticles(
  search?: string,
  categoryId?: string,
  tagId?: string,
  sortOrder: string = 'desc',
  page: number = 1,
  pageSize: number = 6
): Observable<PagedResult<Article>> {

  let params = new HttpParams()
    .set('page', page)
    .set('pageSize', pageSize)
    .set('sortOrder', sortOrder);

  if (search) {
    params = params.set('search', search);
  }

  if (categoryId) {
    params = params.set('categoryId', categoryId);
  }

  if (tagId) {
    params = params.set('tagId', tagId);
  }

  return this.http.get<PagedResult<Article>>(
    `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.articles}`,
    { params }
  );
}

getArticleBySlug(slug: string): Observable<Article> {

  return this.http.get<Article>(
    `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.articleBySlug}/${slug}`
  );

}

 getRelatedArticles(
    categoryId: string,
    articleId: string
  ): Observable<Article[]> {

    const params = new HttpParams()
      .set('categoryId', categoryId)
      .set('articleId', articleId);

    return this.http.get<Article[]>(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.relatedArticles}`,
      { params }
    );
  }

  


}