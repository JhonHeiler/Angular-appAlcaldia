import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {Cargo} from '../models/Cargo';
@Injectable({
  providedIn: 'root'
})
export class CargoService {
  Api: string = 'http://localhost:8090/api/cargo';

  constructor(private clienteHttp:HttpClient) { }

  AddCargo(datosCargo:Cargo):Observable<any>{
    return this.clienteHttp.post(this.Api,datosCargo);
  }


  ListCargo(){
    return this.clienteHttp.get(this.Api);
    }

    DeleteCargo(id:string):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    ObtenerCargo(id:string):Observable<any>{
      return this.clienteHttp.get(this.Api + "/"+id);
    }

    UpdateCargo(datosCargo:Cargo):Observable<any>{
      return this.clienteHttp.put(this.Api,datosCargo );
    }

}
