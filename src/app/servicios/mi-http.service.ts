import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Http, Response } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  constructor(public http:HttpClient) { } //Http?
  
  public httpGetPromise(url: string, objeto:any){
    return this.http
    .get(url)
    .toPromise()
    .then(this.extraerDatos)
    .catch(this.handleError);
  }

  private extraerDatos(resp:Response) {
      return resp.json() || {};
  }

  private handleError(error:Response | any) {
      return error;
  }
}
