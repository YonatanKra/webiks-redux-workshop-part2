import { Component, OnInit } from '@angular/core';
import {AppState} from "../../../app.store";
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  addItem(value){
    this.ngRedux.dispatch({
      type: "ADD_ITEM",
      payload: value
    });
  }
}
