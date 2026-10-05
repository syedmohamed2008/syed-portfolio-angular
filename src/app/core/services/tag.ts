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
  Tag
} from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private readonly http = inject(HttpClient);

  getTags(categoryId?: string): Observable<Tag[]> {

    let params = new HttpParams();

    if (categoryId) {
      params = params.set('categoryId', categoryId);
    }

    return this.http.get<Tag[]>(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.tags}`,
      { params }
    );
  }

}