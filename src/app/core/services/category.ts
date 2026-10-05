import {
  inject,
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  API_CONFIG
} from '../config/api.config';

import {
  Category
} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly http =
    inject(HttpClient);


  getCategories():
    Observable<Category[]> {

    return this.http.get<Category[]>(

      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.categories}`

    );

  }

}