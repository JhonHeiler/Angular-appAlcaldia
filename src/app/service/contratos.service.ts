import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {contratos} from '../models/Contratos';
@Injectable({
  providedIn: 'root'
})
export class contratosService {
  Api: string = 'http://localhost:8090/api/contratos';
  

  Api2: string = 'http://localhost:8090/api/persona';


  constructor(private clienteHttp:HttpClient) { }

  Addcontratos(datocontratos:contratos):Observable<any>{
    return this.clienteHttp.post(this.Api,datocontratos);
  }

  Listcontratos(){
    return this.clienteHttp.get(this.Api);
    }

    Deletecontratos(id:string):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    Obtenercontratos(id:string):Observable<any>{
      return this.clienteHttp.get(this.Api + "/"+id);
    }

    Updatecontratos(datoscontratos:contratos):Observable<any>{
      return this.clienteHttp.put(this.Api,datoscontratos );
    }

    
  Listpersona(){
    return this.clienteHttp.get(this.Api2);
    }


}
