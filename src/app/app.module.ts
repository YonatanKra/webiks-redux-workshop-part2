import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppListModule} from "./app-list/app-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
