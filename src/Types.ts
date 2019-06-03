import { Injectable, Inject } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import{HttpClient, HttpResponse} from "@angular/common/http";

export interface IWpApiTypes {
  getList(options?: Object): Observable<Object>;
  get(postType: string, options?: Object): Observable<Object>;
}

@Injectable()
export class WpApiTypes extends WpApiParent implements IWpApiTypes {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/types`, options)
  }
  get(postType: string, options = {}) {
    return this.httpGet(`/types/${postType}`, options)
  }
}
