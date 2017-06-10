import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListControlsComponent } from './list-controls.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListControlsComponent, AddItemComponent, DeleteItemComponent],
  exports: [ListControlsComponent]
})
export class ListControlsModule { }
