import { Injectable, Inject } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import{HttpClient, HttpResponse} from "@angular/common/http";

export interface IWpApiPosts {
  getList(options?: Object): Observable<Object>;
  get(postId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(postId: number, body: any, options?: Object): Observable<Object>;
  delete(postId: number, options?: Object): Observable<Object>;
  getMetaList(postId: number, options?: Object): Observable<Object>;
  getMeta(postId: number, metaId: number, options?: Object): Observable<Object>;
  getRevisionList(postId: number, options?: Object): Observable<Object>;
  getRevision(postId: number, revisionId: number, options?: Object): Observable<Object>;
  getCategoryList(postId: number, options?: Object): Observable<Object>;
  getCategory(postId: number, categoryId, options?: Object): Observable<Object>;
  getTagList(postId: number, options?: Object): Observable<Object>;
  getTag(postId: number, tagId, options?: Object): Observable<Object>;
}

@Injectable()
export class WpApiPosts extends WpApiParent implements IWpApiPosts {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/posts`, options)
  }
  get(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}`, options)
  }
  create(body = {}, options = {}) {
    return this.httpPost(`/posts`, body, options)
  }
  update(postId: number, body = {}, options = {}) {
    return this.httpPost(`/posts/${postId}`, body, options)
  }
  delete(postId: number, options = {}) {
    return this.httpDelete(`/posts/${postId}`, options)
  }
  getMetaList(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/meta`, options)
  }
  getMeta(postId: number, metaId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/meta/${metaId}`, options)
  }
  getRevisionList(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/revisions`, options)
  }
  getRevision(postId: number, revisionId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/revisions/${revisionId}`, options)
  }
  getCategoryList(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/terms/category`, options)
  }
  getCategory(postId: number, categoryId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/terms/category/${categoryId}`, options)
  }
  getTagList(postId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/terms/tag`, options)
  }
  getTag(postId: number, tagId: number, options = {}) {
    return this.httpGet(`/posts/${postId}/terms/tag/${tagId}`, options)
  }
}
