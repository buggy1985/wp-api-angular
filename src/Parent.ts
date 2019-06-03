import { Injectable, Inject } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiLoader } from './Loaders';
import { stripTrailingSlash } from './utils';
import {HttpClient, HttpResponse} from "@angular/common/http";


export interface IParent {
  httpGet(url: string, options?: Object): Observable<Object>;
  httpHead(url: string, options?: Object): Observable<Object>;
  httpDelete(url: string, options?: Object): Observable<Object>;
  httpPost(url: string, body: any, options?: Object): Observable<Object>;
  httpPut(url: string, body: any, options?: Object): Observable<Object>;
  httpPatch(url: string, body: any, options?: Object): Observable<Object>;
}

@Injectable()
export class WpApiParent implements IParent {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) { }

  httpGet(url: string, options = {}) {
    return this.http.get(this.wpApiLoader.getWebServiceUrl(url), options);
  }
  httpHead(url: string, options = {}) {
    return this.http.head(this.wpApiLoader.getWebServiceUrl(url), options);
  }
  httpDelete(url: string, options = {}) {
    return this.http.delete(this.wpApiLoader.getWebServiceUrl(url), options);
  }
  httpPost(url: string, body = {}, options = {}) {
    return this.http.post(this.wpApiLoader.getWebServiceUrl(url), body, options);
  }
  httpPut(url: string, body = {}, options = {}) {
    return this.http.put(this.wpApiLoader.getWebServiceUrl(url), body, options);
  }
  httpPatch(url: string, body = {}, options = {}) {
    return this.http.patch(this.wpApiLoader.getWebServiceUrl(url), body, options);
  }
}
