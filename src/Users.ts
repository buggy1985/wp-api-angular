import { Injectable, Inject } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import {HttpClient, HttpResponse} from "@angular/common/http";

export interface IWpApiUsers {
  getList(options?: Object): Observable<Object>;
  me(options?: Object): Observable<Object>;
  get(userId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(userId: number, body: any, options?: Object): Observable<Object>;
  delete(userId: number, options?: Object): Observable<Object>;
}

@Injectable()
export class WpApiUsers extends WpApiParent implements IWpApiUsers {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/users`, options)
  }
  me(options = {}) {
    return this.httpGet(`/users/me`, options)
  }
  get(userId: number, options = {}) {
    return this.httpGet(`/users/${userId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/users`, body, options)
  }
  update(userId: number, body = {}, options = {}) {
    return this.httpPost(`/users/${userId}`, body, options)
  }
  delete(userId: number, options = {}) {
    return this.httpDelete(`/users/${userId}`, options)
  }
}
