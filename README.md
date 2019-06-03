<p align="center">
  <h1 align="center">wp-api-angular</h1>
  <p align="center">Angular >=2 services for WordPress >= 4.7 Rest API</p>
</p>

================

[![Join the chat at https://gitter.im/shprink/wp-api-angular](https://badges.gitter.im/shprink/wp-api-angular.svg)](https://gitter.im/shprink/wp-api-angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Angular2 services to consume [WP-API v2](http://v2.wp-api.org/)

[Live Demo](https://plnkr.co/edit/hqE4bvbM6HXql5Insjx8?p=preview)

If you want to use AngularJS v1, here is the latest version: [v2.0.0-rc3](https://www.npmjs.com/package/wp-api-angularjs). `npm i wp-api-angularjs@v2.0.0-rc3`

## Installation

```shell
npm install -g typings
npm install wp-api-angular
```

### TypeScript

Nothing special if you use TS

### UMD

UMD files are available `wp-api-angular.umd.js` and `wp-api-angular.umd.min.js`, the [Live Demo](https://plnkr.co/edit/hqE4bvbM6HXql5Insjx8?p=preview) uses them with systemJS

## Bootstrap

An exported function instead `WpApiLoaderFactory` is mandatory to be used with [AoT compilation](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) or [Ionic 2](http://ionic.io/).


```js
import { HttpClient } from '@angular/common/http';
import { 
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular'

export function WpApiLoaderFactory(http: HttpClient) {
  return new WpApiStaticLoader(http, 'http://YOUR_DOMAIN/wp-json/', /* namespace is optional, default: '/wp/v2' */);
}

@NgModule({
  imports: [
    BrowserModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [HttpClient]
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
```

## API

Every method return an Obervable. If you want to get a Promise you will need to add the rxjs `toPromise` operator:

```js

class Test {
  constructor(private wpApiPosts: WpApiPosts) {
    this.wpApiPosts.getList()
      .toPromise()
      .then(response => response)
      .then(body => {})
      .catch(error => {})
  }
}

```

### RequestOptionsArgs

Every request can have an optional [`RequestOptionsArgs`](https://angular.io/docs/ts/latest/api/http/index/RequestOptionsArgs-interface.html) object.

```js
class RequestOptionsArgs {
  url : string
  method : string|RequestMethod
  search : string|URLSearchParams
  headers : Headers
  body : any
  withCredentials : boolean
}
```

This is where you can add query string to your request or change the headers (see below).

```
import { Headers } from '@angular/http';

const headers = new Headers({
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Max-Age': '1728000',
  'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description'
  'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT'
});

wpApiPosts.getList({ headers });
```

### WpApiPosts

```ts
  getList(options?: Object): Observable<Object>;
  get(postId, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(postId, body: any, options?: Object): Observable<Object>;
  delete(postId, options?: Object): Observable<Object>;
  getMetaList(postId, options?: Object): Observable<Object>;
  getMeta(postId, metaId, options?: Object): Observable<Object>;
  getRevisionList(postId, options?: Object): Observable<Object>;
  getRevision(postId, revisionId, options?: Object): Observable<Object>;
  getCategoryList(postId, options?: Object): Observable<Object>;
  getCategory(postId, categoryId, options?: Object): Observable<Object>;
  getTagList(postId, options?: Object): Observable<Object>;
  getTag(postId, tagId, options?: Object): Observable<Object>;
```

### WpApiPages

```ts
  getList(options?: Object): Observable<Object>;
  get(pageId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(pageId: number, body: any, options?: Object): Observable<Object>;
  delete(pageId: number, options?: Object): Observable<Object>;
  getMetaList(pageId: number, options?: Object): Observable<Object>;
  getMeta(pageId: number, metaId: number, options?: Object): Observable<Object>;
  getRevisionList(pageId: number, options?: Object): Observable<Object>;
  getRevision(pageId: number, revisionId: number, options?: Object): Observable<Object>;
```

### WpApiComments

```ts
  getList(options?: Object): Observable<Object>;
  get(commentId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(commentId: number, body: any, options?: Object): Observable<Object>;
  delete(commentId: number, options?: Object): Observable<Object>;
```

### WpApiTypes

```ts
  getList(options?: Object): Observable<Object>;
  get(postType: string, options?: Object): Observable<Object>;
```

### WpApiMedia

```ts
  getList(options?: Object): Observable<Object>;
  get(mediaId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(mediaId: number, body: any, options?: Object): Observable<Object>;
  delete(mediaId: number, options?: Object): Observable<Object>;
```

### WpApiUsers

```ts
  getList(options?: Object): Observable<Object>;
  me(options?: Object): Observable<Object>;
  get(userId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(userId: number, body: any, options?: Object): Observable<Object>;
  delete(userId: number, options?: Object): Observable<Object>;
```

### WpApiTaxonomies

```ts
  getList(options?: Object): Observable<Object>;
  get(taxonomiesType: string, options?: Object): Observable<Object>;
```

### WpApiStatuses

```ts
  getList(options?: Object): Observable<Object>;
  get(statusesName: string, options?: Object): Observable<Object>;
```

### WpApiTerms

`taxonomiesType` can be `tags`, `categories` and more.

```ts
  getList(taxonomiesType: string, options?: Object): Observable<Object>;
  get(taxonomiesType: string, termId: number, options?: Object): Observable<Object>;
  create(taxonomiesType: string, body: any, options?: Object): Observable<Object>;
  update(taxonomiesType: string, termId: number, body: any, options?: Object): Observable<Object>;
  delete(taxonomiesType: string, termId: number, options?: Object): Observable<Object>;
```

### WpApiCustom

```ts
  getList(options?: Object): Observable<Object>;
  get(customId: number, options?: Object): Observable<Object>;
  create(body: any, options?: Object): Observable<Object>;
  update(customId: number, body: any, options?: Object): Observable<Object>;
  delete(customId: number, options?: Object): Observable<Object>;
```

## Authentication

TO BE DEFINED

## Contribute

```shell
npm install

# Open two terminals
# and run watch to build on the lib files changes
npm run watch

# in the other terminal run following to build the test page
npm start
```

Open ```http://localhost:8080```
