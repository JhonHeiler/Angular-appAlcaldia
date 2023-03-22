import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {categoria} from '../models/Categoria';
@Injectable({
  providedIn: 'root'
})
export class categoriaService {
  Api: string = 'http://localhost:8090/api/categoria';

  constructor(private clienteHttp:HttpClient) { }

  Addcategoria(datoscategoria:categoria):Observable<any>{
    return this.clienteHttp.post(this.Api,datoscategoria);
  }


  Listcategoria(){
    return this.clienteHttp.get(this.Api);
    }

    Deletecategoria(id:string):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    Obtenercategoria(id:string):Observable<any>{
        const l=1
        console.log(l)
      return this.clienteHttp.get(this.Api + "/"+id);
    }

    Updatecategoria(datoscategoria:categoria):Observable<any>{
      return this.clienteHttp.put(this.Api,datoscategoria);
    }

}
