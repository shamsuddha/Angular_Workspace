import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routeList} from './AppRoute';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {fakeHttpInterceptorFn} from "./controller/FakeBackendInterceptorFn";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeList),
    provideHttpClient(withInterceptors([
      fakeHttpInterceptorFn
    ]))
  ]
};

