import { Injectable, Inject } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import { HttpClient, HttpResponse } from "@angular/common/http";

export interface IWpApiPages {
  getList(options?: Object): Observable<Object>;
  get(pageId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(pageId: number, body: any, options?: Object): Observable<Object>;
  delete(pageId: number, options?: Object): Observable<Object>;
  getMetaList(pageId: number, options?: Object): Observable<Object>;
  getMeta(pageId: number, metaId: number, options?: Object): Observable<Object>;
  getRevisionList(pageId: number, options?: Object): Observable<Object>;
  getRevision(pageId: number, revisionId: number, options?: Object): Observable<Object>;
}

@Injectable()
export class WpApiPages extends WpApiParent implements IWpApiPages {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }

  getList(options = {}) {
    return this.httpGet(`/pages`, options)
  }
  get(pageId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/pages`, body, options)
  }
  update(pageId: number, body = {}, options = {}) {
    return this.httpPost(`/pages/${pageId}`, body, options)
  }
  delete(pageId: number, options = {}) {
    return this.httpDelete(`/pages/${pageId}`, options)
  }
  getMetaList(pageId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/meta`, options)
  }
  getMeta(pageId: number, metaId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/meta/${metaId}`, options)
  }
  getRevisionList(pageId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/revisions`, options)
  }
  getRevision(pageId: number, revisionId: number, options = {}) {
    return this.httpGet(`/pages/${pageId}/revisions/${revisionId}`, options)
  }
}
