import {bootstrapApplication} from '@angular/platform-browser';
import {AppComp} from './app/AppComp';
import {appConfig} from "./app/AppConfig";

bootstrapApplication(AppComp, appConfig)
  .catch((err) => console.error(err));

