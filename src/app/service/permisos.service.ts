import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { permisos } from '../models/Permisos';

@Injectable({
  providedIn: 'root',
})
export class permisosService {
  private API_URL: string = 'http://localhost:8090/api/permisos';

  private AUTH_URL: string = 'http://localhost:8090/api/session';



  Api2: string = 'http://localhost:8090/api/persona';

  Api3: string = 'http://localhost:8090/api/rol';

  constructor(private clienteHttp: HttpClient) {}

  Addpermisos(datopermisos: permisos): Observable<any> {
    return this.clienteHttp.post(this.API_URL, datopermisos);
  }

  login(email: string, pass: string)  {
    return this.clienteHttp.post(this.AUTH_URL, {
      correo: email,
      password: pass
    });
  }

  Listpermisos(): Observable<any> {
    return this.clienteHttp.get(this.API_URL);
  }

  Deletepermisos(id: string): Observable<any> {
    return this.clienteHttp.delete(this.API_URL + '/' + id);
  }

  Obtenerpermisos(id: string): Observable<any> {
    return this.clienteHttp.get(this.API_URL + '/' + id);
  }

  Updatepermisos(datospermisos: permisos): Observable<any> {
    return this.clienteHttp.put(this.API_URL, datospermisos);
  }

  Listpersona() {
    return this.clienteHttp.get(this.Api2);
  }

  Listrol() {
    return this.clienteHttp.get(this.Api3);
  }
}
