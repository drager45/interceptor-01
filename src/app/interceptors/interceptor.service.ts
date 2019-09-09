import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest , HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() { }

  // req: lo que estamos solicitando, el cual resuelve cualquier cosa por eso esta declarado como any
  // next: es lo que se debe ejecutar en cuanto se ejecute el interceptor
  // Observable<HttpEvent<any>>: es el tipado del retorno del interceptor
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Se evalua por el Interceptor');
    return next.handle( req );
  }

}
