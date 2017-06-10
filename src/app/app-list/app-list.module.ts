import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppListComponent} from "./app-list.component";
import { ListViewComponent } from './list-view/list-view.component';
import { ListItemComponent } from './list-item/list-item.component';
import {ListControlsModule} from "./list-controls/list-controls.module";

@NgModule({
  imports: [
    CommonModule,
    ListControlsModule
  ],
  declarations: [AppListComponent, ListViewComponent, ListItemComponent],
  exports: [AppListComponent]
})
export class AppListModule { }
