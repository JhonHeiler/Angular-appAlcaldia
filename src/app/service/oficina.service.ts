import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {Oficina} from '../models/oficina';
@Injectable({
  providedIn: 'root'
})
export class oficinaService {
  Api: string = 'http://localhost:8090/api/oficina';

  Api2: string = 'http://localhost:8090/api/secretaria';

  constructor(private clienteHttp:HttpClient) { }

  Addoficina(datooficina:Oficina):Observable<any>{
    return this.clienteHttp.post(this.Api,datooficina);
  }


  Listoficina(){
    return this.clienteHttp.get(this.Api);
    }

    Deleteoficina(id:string):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    Obteneroficina(id:string):Observable<any>{
      return this.clienteHttp.get(this.Api + "/"+id);
    }

    Updateoficina(datosoficina:Oficina):Observable<any>{
      return this.clienteHttp.put(this.Api,datosoficina );
    }

    
  Listsecretaria(){
    return this.clienteHttp.get(this.Api2);
    }

}
