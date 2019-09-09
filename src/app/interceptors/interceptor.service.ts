import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest , HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() { }

  // req: lo que estamos solicitando, el cual resuelve cualquier cosa por eso esta declarado como any
  // next: es lo que se debe ejecutar en cuanto se ejecute el interceptor
  // Observable<HttpEvent<any>>: es el tipado del retorno del interceptor
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'token-usuario': 'ABC45450405'
    });
    const reqClone = req.clone({
      headers
    });
    return next.handle( reqClone ).pipe(
      catchError( this.controlErrors)
    );
  }

  controlErrors(error: HttpErrorResponse) {
    console.log('Ocurrio un error ');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error en la url de la peticion')
  }

}
