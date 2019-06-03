import { Injectable, Inject } from '@angular/core';

// Need to import interfaces dependencies
// Bug TypeScript https://github.com/Microsoft/TypeScript/issues/5938
import { Observable } from 'rxjs';

import { WpApiParent } from './Parent';

import { WpApiLoader } from './Loaders';
import{HttpClient, HttpResponse} from "@angular/common/http";

export interface IWpApiTaxonomies {
  getList(options?: Object): Observable<Object>;
  get(taxonomiesType: string, options?: Object): Observable<Object>;
}

@Injectable()
export class WpApiTaxonomies extends WpApiParent implements IWpApiTaxonomies {
  constructor(
    public wpApiLoader: WpApiLoader,
    public http: HttpClient
  ) {
    super(wpApiLoader, http);
  }
  getList(options = {}) {
    return this.httpGet(`/taxonomies`, options)
  }
  get(taxonomiesType: string, options = {}) {
    return this.httpGet(`/taxonomies/${taxonomiesType}`, options)
  }
}
