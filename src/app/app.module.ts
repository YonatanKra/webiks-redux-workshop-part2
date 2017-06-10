import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import {AppListModule} from "./app-list/app-list.module";
import {AppState, rootReducer, INITIAL_STATE} from "./app.store";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppListModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<AppState>){
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE);
  }
}
