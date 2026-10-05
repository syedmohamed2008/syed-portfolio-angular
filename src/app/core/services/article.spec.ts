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
    page: number = 1
  ): Observable<Article[]> {

    let params =
      new HttpParams()
        .set('page', page)
        .set('sortOrder', sortOrder);


    if (search) {

      params =
        params.set(
          'search',
          search
        );

    }


    if (categoryId) {

      params =
        params.set(
          'categoryId',
          categoryId
        );

    }


    if (tagId) {

      params =
        params.set(
          'tagId',
          tagId
        );

    }


    return this.http.get<Article[]>(

      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.articles}`,

      {
        params
      }

    );

  }

}