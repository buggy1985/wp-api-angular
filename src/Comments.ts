import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import{HttpClient, HttpResponse} from "@angular/common/http";

export interface IWpApiComments {
  getList(options?: Object): Observable<Object>;
  get(commentId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(commentId: number, body: any, options?: Object): Observable<Object>;
  delete(commentId: number, options?: Object): Observable<Object>;
}

@Injectable()
export class WpApiComments extends WpApiParent implements IWpApiComments {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/comments`, options)
  }
  get(commentId: number, options = {}) {
    return this.httpGet(`/comments/${commentId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/comments`, body, options)
  }
  update(commentId: number, body = {}, options = {}) {
    return this.httpPost(`/comments/${commentId}`, body, options)
  }
  delete(commentId: number, options = {}) {
    return this.httpDelete(`/comments/${commentId}`, options)
  }
}
