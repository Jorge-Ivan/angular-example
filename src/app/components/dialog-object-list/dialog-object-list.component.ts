import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPerson } from 'src/app/interface/person.model';

@Component({
  selector: 'app-dialog-object-list',
  templateUrl: './dialog-object-list.component.html',
  styleUrls: ['./dialog-object-list.component.css']
})
export class DialogObjectListComponent {

  dataIterator:Array<String>= [];

  constructor(@Inject(MAT_DIALOG_DATA) public data:DataDialog) {
    if(typeof data.person == 'object')
    this.dataIterator = Object.values(data.person);
    console.log(data)
  }

}

interface DataDialog {
  title:String,
  person:IPerson
}