import { Observable } from 'rxjs';

export interface IParent {
  httpGet(url: string, options?: Object): Observable<Object>;
  httpHead(url: string, options?: Object): Observable<Object>;
  httpDelete(url: string, options?: Object): Observable<Object>;
  httpPost(url: string, body: any, options?: Object): Observable<Object>;
  httpPut(url: string, body: any, options?: Object): Observable<Object>;
  httpPatch(url: string, body: any, options?: Object): Observable<Object>;
}

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

export interface IWpApiComments {
  getList(options?: Object): Observable<Object>;
  get(commentId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(commentId: number, body: any, options?: Object): Observable<Object>;
  delete(commentId: number, options?: Object): Observable<Object>;
}

export interface IWpApiTypes {
  getList(options?: Object): Observable<Object>;
  get(postType: string, options?: Object): Observable<Object>;
}

export interface IWpApiMedia {
  getList(options?: Object): Observable<Object>;
  get(mediaId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(mediaId: number, body: any, options?: Object): Observable<Object>;
  delete(mediaId: number, options?: Object): Observable<Object>;
}

export interface IWpApiUsers {
  getList(options?: Object): Observable<Object>;
  me(options?: Object): Observable<Object>;
  get(userId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(userId: number, body: any, options?: Object): Observable<Object>;
  delete(userId: number, options?: Object): Observable<Object>;
}

export interface IWpApiTaxonomies {
  getList(options?: Object): Observable<Object>;
  get(taxonomiesType: string, options?: Object): Observable<Object>;
}

export interface IWpApiStatuses {
  getList(options?: Object): Observable<Object>;
  get(statusesName: string, options?: Object): Observable<Object>;
}

export interface IWpApiTerms {
  getList(taxonomiesType: string, options?: Object): Observable<Object>;
  get(taxonomiesType: string, termId: number, options?: Object): Observable<Object>;
  create(taxonomiesType: string, body: any, options?: Object): Observable<Object>;
  update(taxonomiesType: string, termId: number, body: any, options?: Object): Observable<Object>;
  delete(taxonomiesType: string, termId: number, options?: Object): Observable<Object>;
}

export interface IWpApiCustom {
  getList(options?: Object): Observable<Object>;
  get(customId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(customId: number, body: any, options?: Object): Observable<Object>;
  delete(customId: number, options?: Object): Observable<Object>;
}
