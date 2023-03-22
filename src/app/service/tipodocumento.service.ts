import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {tipodocumento} from '../models/TipoDocumento';
@Injectable({
  providedIn: 'root'
})
export class tipodocumentoService {
  Api: string = 'http://localhost:8090/api/tipo_documento';

  constructor(private clienteHttp:HttpClient) { }

  Addtipodocumento(datostipodocumento:tipodocumento):Observable<any>{
    return this.clienteHttp.post(this.Api,datostipodocumento);
  }


  Listtipodocumento(){
    return this.clienteHttp.get(this.Api);
    }

    Deletetipodocumento(id:any):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    Obtenertipodocumento(id:any):Observable<any>{
      return this.clienteHttp.get(this.Api,id);
    }

    Updatetipodocumento(datostipodocumento:tipodocumento):Observable<any>{
      return this.clienteHttp.put(this.Api,datostipodocumento );
    }

}
