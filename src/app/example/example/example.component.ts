import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogObjectListComponent } from 'src/app/components/dialog-object-list/dialog-object-list.component';
import { IPerson } from 'src/app/interface/person.model';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(public dialog:MatDialog, private exampleService: ExampleService) { }

  exampleForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.minLength(3)]),
    document_number: new FormControl('', Validators.minLength(10)),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.min(0), Validators.max(100)]),
    hobby: new FormControl('', [Validators.required]),
  }) as PersonFormGroup;


  ngOnInit(): void {
  }
  
  onSubmit() {
    if(this.exampleForm.valid){
      let person:IPerson = this.exampleForm.value;
      this.exampleService.setPersonData(person);
      console.log(`Saving person`, person);
      this.openDialog();
      this.onReset();
    }
  }

  openDialog() {
    this.exampleService.getPersonData().subscribe(person=>{
      this.dialog.open(DialogObjectListComponent, {
        data: {person:person, title:'Datos guardados'},
      });
    })
  }

  onReset = () => {
    this.exampleForm.reset();
  }

}

interface PersonFormGroup extends FormGroup {
  value: IPerson;
  controls: {
    firstname: AbstractControl,
    lastname: AbstractControl,
    document_number: AbstractControl,
    email: AbstractControl,
    gender: AbstractControl,
    age: AbstractControl,
    hobby: AbstractControl,
  };
}
