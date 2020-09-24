import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'Anagrama':
        this.router.navigate(['/Juegos/Anagrama']);
      break;
      case 'Piedra-papel-tijera':
        this.router.navigate(['/Juegos/Piedra-papel-tijera']);
      break;
      case 'TaTeTi':
        this.router.navigate(['/Juegos/TaTeTi']);
      break;
      case 'Memotest':
        this.router.navigate(['/Juegos/Memotest']);
      break;
      case 'Sudoku':
        this.router.navigate(['/Juegos/Sudoku']);
      break;
    }
  }

}
