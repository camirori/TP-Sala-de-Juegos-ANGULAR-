import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor(public breakpointObserver: BreakpointObserver) { }

  columnas=2;
  height=2;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.columnas=1;
          this.height=1.5;
        }
        else{
          this.columnas=2;
          this.height=2;
        }
      });
  }


}
