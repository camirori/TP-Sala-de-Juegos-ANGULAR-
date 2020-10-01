import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import {FormControl, Validators, ValidatorFn, AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';
import { Jugador } from 'src/app/clases/jugador';
import { AuthService } from '../../servicios/auth.service'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {
  @Output() mostrarThisEvent= new EventEmitter<boolean>();

  checked: boolean = true;
  errorMsj= ' ';
  registroForm = new FormGroup({});

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwdFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  repeatPasswdFormControl= new FormControl('',[
    Validators.required,
    this.validateAreEqual.bind(this)
  ]);

  constructor(private authService: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
    this.checked = true;
    this.registroForm.addControl('pass',this.passwdFormControl);
    this.registroForm.addControl('repeatPass',this.repeatPasswdFormControl);
    this.registroForm.addControl('email',this.emailFormControl);
    this.registroForm.setValidators(this.matchPasswd);
    this.registroForm.get('pass').valueChanges.subscribe((val) => {
      this.registroForm.get('repeatPass').updateValueAndValidity();
    });
  }

  matchPasswd: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const pass = control.get('pass');
    const repeatPass = control.get('repeatPass');
    return pass && repeatPass && pass.value != repeatPass.value ? { notMatch: true } : null;
  };

  /* registroForm = new FormGroup({
    'pass': this.passwdFormControl,
    'repeatPass': this.repeatPasswdFormControl
  }, { validators: this.matchPasswd }); */

  validateAreEqual(fieldControl: FormControl) {
    return this.registroForm && fieldControl && this.registroForm.get("pass") && 
    fieldControl.value === this.registroForm.get("pass").value ? null : {
        NotEqual: true
    };
  } 



  checkboxFormControl = new FormControl('', [
    Validators.required,
  ]);

 
  hideForm(){
    this.mostrarThisEvent.emit(false);
  }

  Registrar(){
    if(this.emailFormControl.valid && this.passwdFormControl.valid && this.repeatPasswdFormControl.valid && this.registroForm.valid){
      this.errorMsj=' ';
      console.log("input valido");
      let email = this.emailFormControl.value;
      let clave = this.passwdFormControl.value;  
      let user = new Jugador(email,clave);
      let rdo = this.authService.register(user).then(()=>{
        this.hideForm();
        let user = new Jugador(email,clave);
        this.authService.signIn(user,this.checked)
        .then(()=>this.router.navigate(['/Principal']))
        .catch(err=>{
          console.log(err);
        });
      }).catch(err=>this.errorMsj=err);
      console.log(rdo);

    }
  }

}
