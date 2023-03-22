import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import { prueba } from '../models/Prueba';
@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  Api: string = 'http://localhost:8090/api/prueba';

  constructor(private clienteHttp:HttpClient) { }

  AddPrueba(datosPrueba:prueba):Observable<any>{
    return this.clienteHttp.post(this.Api,datosPrueba);
  }


  Listprueba(){
    return this.clienteHttp.get(this.Api);
    }

    DeletePrueba(id:any):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    Obtenerprueba(id:any):Observable<any>{
      return this.clienteHttp.get(this.Api,id);
    }

    UpdatePrueba(datosPrueba:prueba):Observable<any>{
      return this.clienteHttp.put(this.Api,datosPrueba);
    }                            

}
