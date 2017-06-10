import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @select('list') readonly list: Observable<number>;
  constructor() { }

  ngOnInit() {
    this.list.subscribe(newList => console.log(newList));
  }

}
