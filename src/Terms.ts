import { Injectable, Inject } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import{HttpClient, HttpResponse} from "@angular/common/http";

export interface IWpApiTerms {
  getList(taxonomiesType: string, options?: Object): Observable<Object>;
  get(taxonomiesType: string, termId: number, options?: Object): Observable<Object>;
  create(taxonomiesType: string, body: any, options?: Object): Observable<Object>;
  update(taxonomiesType: string, termId: number, body: any, options?: Object): Observable<Object>;
  delete(taxonomiesType: string, termId: number, options?: Object): Observable<Object>;
}

const defaultTaxoType = 'categories';

@Injectable()
export class WpApiTerms extends WpApiParent implements IWpApiTerms {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(taxonomiesType = defaultTaxoType , options = {}) {
    return this.httpGet(`/${taxonomiesType}`, options)
  }
  get(taxonomiesType = defaultTaxoType, termId: number, options = {}) {
    return this.httpGet(`/${taxonomiesType}/${termId}`, options)
  }
  create(taxonomiesType = defaultTaxoType, body = {}, options = {}) {
    return this.httpPost(`/${taxonomiesType}`, body, options)
  }
  update(taxonomiesType = defaultTaxoType, termId: number, body = {}, options = {}) {
    return this.httpPost(`/${taxonomiesType}/${termId}`, body, options)
  }
  delete(taxonomiesType = defaultTaxoType, termId: number, options = {}) {
    return this.httpDelete(`/${taxonomiesType}/${termId}`, options)
  }
}
