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
  ContactRequest
} from '../models/contact-request';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly http =
    inject(HttpClient);


  sendMessage(
    request: ContactRequest
  ): Observable<void> {

    return this.http.post<void>(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.contact}`,
      request
    );

  }

}