import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {Sectretaria} from '../models/Secretaria';
@Injectable({
  providedIn: 'root'
})
export class secretariaService {
  Api: string = 'http://localhost:8090/api/secretaria';

  Api2: string = 'http://localhost:8090/api/contratos';

  constructor(private clienteHttp:HttpClient) { }

  Addsecretaria(datoSecretaria:Sectretaria):Observable<any>{
    return this.clienteHttp.post(this.Api,datoSecretaria);
  }


  Listsecretaria(){
    return this.clienteHttp.get(this.Api);
    }

    Deletesecretaria(id:string):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    Obtenersecretaria(id:string):Observable<any>{
      return this.clienteHttp.get(this.Api + "/"+id);
    }

    Updatesecretaria(datossecretaria:Sectretaria):Observable<any>{
      return this.clienteHttp.put(this.Api,datossecretaria );
    }

    
  ListContratos(){
    return this.clienteHttp.get(this.Api2);
    }

}
