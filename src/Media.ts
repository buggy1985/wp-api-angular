import { Injectable, Inject } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import{HttpClient, HttpResponse} from "@angular/common/http";

export interface IWpApiMedia {
  getList(options?: Object): Observable<Object>;
  get(mediaId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(mediaId: number, body: any, options?: Object): Observable<Object>;
  delete(mediaId: number, options?: Object): Observable<Object>;
}

@Injectable()
export class WpApiMedia extends WpApiParent implements IWpApiMedia {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/media`, options)
  }
  get(mediaId: number, options = {}) {
    return this.httpGet(`/media/${mediaId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/media`, body, options)
  }
  update(mediaId: number, body = {}, options = {}) {
    return this.httpPost(`/media/${mediaId}`, body, options)
  }
  delete(mediaId: number, options = {}) {
    return this.httpDelete(`/media/${mediaId}`, options)
  }
}
