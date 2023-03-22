import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../models/Persona';
@Injectable({
    providedIn: 'root'
})
export class personaService {
    Listpersonacarga() {
      throw new Error('Method not implemented.');
    }
    Api: string = 'http://localhost:8090/api/persona';


    Api2: string = 'http://localhost:8090/api/cargo';

    Api3: string = 'http://localhost:8090/api/rol';

    Api4: string = 'http://localhost:8090/api/personacarga';

    Api5: string = 'http://localhost:8090/api/tipo_documento';

    constructor(private clienteHttp: HttpClient) { }

    Addpersona(datopersona: persona): Observable<any> {
        return this.clienteHttp.post(this.Api, datopersona);
    }

    Listpersona() {
        return this.clienteHttp.get(this.Api);
    }

    Deletepersona(id: string): Observable<any> {
        return this.clienteHttp.delete(this.Api + "/" + id);
    }

    Obtenerpersona(id: string): Observable<any> {
        return this.clienteHttp.get(this.Api + "/" + id);
    }

    Updatepersona(datospersona: persona): Observable<any> {
        return this.clienteHttp.put(this.Api, datospersona);
    }


    Listcargo() {
        return this.clienteHttp.get(this.Api2);
    }

    Listrol() {
        return this.clienteHttp.get(this.Api3);
    }

    Listcargapersona() {
        return this.clienteHttp.get(this.Api4);
    }

    Listptipo_documento() {
        return this.clienteHttp.get(this.Api5);
    }



}
