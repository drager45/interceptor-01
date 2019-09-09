import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    let  params = new HttpParams().append('page','1');
    params= params.append('nombre','Fernando Herrera');

    //const headers = new HttpHeaders({
    //  'token-usuario': 'ABC45450405'
    //});

    return this.http.get(`https://reqres.in/api/user`, {
      params
    }).pipe(

      map(resp => resp['data']),
      catchError(this.controlErrors)

    );
  }

  controlErrors(error: HttpErrorResponse) {
    console.log('Ocurrio un error ');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error en la url de la peticion')
  }
}
