import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwdFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  checkboxFormControl = new FormControl('', [
    Validators.required,
  ]);

  modal = document.getElementById('id01');
  
  hideForm(evento){
    document.getElementById('id01').style.display='none';

  }

}
