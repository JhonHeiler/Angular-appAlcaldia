import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { evidencia } from '../models/Evidencia';
@Injectable({
    providedIn: 'root'
})
export class evidenciaService {
    Api: string = 'http://localhost:8090/api/evidencia';


    Api2: string = 'http://localhost:8090/api/actividadescontrato';

    Api3: string = 'http://localhost:8090/api/prueba';

    Api4: string = 'http://localhost:8090/api/personacarga';


    constructor(private clienteHttp: HttpClient) { }

    Addevidencia(datoevidencia: evidencia): Observable<any> {
    
        return this.clienteHttp.post(this.Api, datoevidencia);
    }

    Listevidencia() {
        return this.clienteHttp.get(this.Api);
    }

    Deleteevidencia(id: string): Observable<any> {
        return this.clienteHttp.delete(this.Api + "/" + id)
    }

    Obtenerevidencia(id: string): Observable<any> {
        return this.clienteHttp.get(this.Api + "/" + id);
    }

    Updateevidencia(datosevidencia: evidencia): Observable<any> {
        return this.clienteHttp.put(this.Api, datosevidencia);
    }


    Listactividadescontrato() {
        return this.clienteHttp.get(this.Api2);
    }

    Listprueba() {
        return this.clienteHttp.get(this.Api3);
    }

    Listpersonacarga() {
        return this.clienteHttp.get(this.Api4);
    }


}
