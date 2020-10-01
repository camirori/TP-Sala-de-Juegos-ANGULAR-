import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service'; 
import { Jugador } from '../../clases/jugador';


import {Subscription, timer} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;
  errorMsj= '';
  checked: boolean = true;
  mostrarClaveOlvidada=false;
  mailEnviadoMsj='';


  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

  }

  ngOnInit(): void {
  }

  Autocompletar(){
    this.usuario='user1@user.com';
    this.clave='123456';
  }

  Validar(){
    if (!this.usuario || !this.clave){
      this.errorMsj="Por favor complete las credenciales";
    }else{
      this.errorMsj="";
      this.MoverBarraDeProgreso();
    }
  }

  Entrar() {
    this.logeando=true;
    if (this.usuario && this.clave) {
      console.log(this.checked);
      let user = new Jugador(this.usuario,this.clave);

      let rdo = this.authService.signIn(user,this.checked).then(()=>{
          this.ReiniciarBarra();
          this.router.navigate(['/Principal']);}
      ).catch(err=>{
        this.errorMsj=err;
        this.ReiniciarBarra();
      });
      console.log(rdo);
    }
  }

  RestablecerClave(){
    this.mailEnviadoMsj='';
    this.errorMsj='';
    if(this.usuario){
      this.authService.resetClave(this.usuario).then(()=>
        this.mailEnviadoMsj="E-mail de restablecimiento de contraseña enviado"
      ).catch((err)=>this.errorMsj=err);
    }

  }

  ReiniciarBarra(){
    this.progreso=0;
    this.ProgresoDeAncho="0%";
    this.clase="progress-bar progress-bar-info progress-bar-striped ";
    this.logeando=true;
  }

  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timerObj = timer(200, 50);
    this.subscription = timerObj.subscribe(t => {
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
     //this.logeando=true;
  }

}
