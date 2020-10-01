import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service'; 



@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private route: Router,
              private authService: AuthService) { }

  ngOnInit(): void {

  }

  isHome(){
    if(this.route.url=='/' || this.route.url=='/Principal')
      return true;
  }

  isLoggedIn(){
    if(sessionStorage.getItem('isLoggedIn')=='1' || localStorage.getItem('isLoggedIn')=='1')
      return true;
    else 
      return false;
  }

  logout(){
    this.authService.signOut().catch(err=>console.log(err));
  }
  

}
