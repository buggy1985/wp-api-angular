import { Injectable, Inject } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import{HttpClient, HttpResponse} from "@angular/common/http";

export interface IWpApiCustom {
  getList(options?: Object): Observable<Object>;
  get(customId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(customId: number, body: any, options?: Object): Observable<Object>;
  delete(customId: number, options?: Object): Observable<Object>;
}

export class Custom extends WpApiParent implements IWpApiCustom {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient,
    public entityName: string
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/${this.entityName}`, options)
  }
  get(customId: number, options = {}) {
    return this.httpGet(`/${this.entityName}/${customId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/${this.entityName}`, body, options)
  }
  update(customId: number, body = {}, options = {}) {
    return this.httpPost(`/${this.entityName}/${customId}`, body, options)
  }
  delete(customId: number, options = {}) {
    return this.httpDelete(`/${this.entityName}/${customId}`, options)
  }
}


@Injectable()
export class WpApiCustom extends WpApiParent {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }

  getInstance(entityName = '') {
    if (typeof entityName !== 'string') {
      throw new Error(`getInstance needs an entity name`);
    }
    return new Custom(this.wpApiLoader, this.http, entityName);
  }
}
