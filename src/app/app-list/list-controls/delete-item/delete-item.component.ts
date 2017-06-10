import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteItem(){
    alert('Delete item!');
  }
}
