import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) { }

  estilos={width: '80%', left: '95px', position: 'relative', margin: 'auto'};

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.estilos={width: '100%', left: '0px', position: 'relative', margin: 'auto'};
        }
        else{
          this.estilos={width: '80%', left: '95px', position: 'relative', margin: 'auto'};
        }
      });
  }

}
