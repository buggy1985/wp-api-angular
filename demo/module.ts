import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WpApiModule,  WpApiLoader,  WpApiStaticLoader } from '../dist/wp-api-angular'
import { App } from './app';
import{HttpClient, HttpResponse} from "@angular/common/http";

import { config } from "../config";

console.info('config', config);

export function WpApiLoaderFactory(http: HttpClient) {
  return new WpApiStaticLoader(http, config.baseUrl);
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
  declarations: [App],
  bootstrap: [App]
})
export class AppModule { }
