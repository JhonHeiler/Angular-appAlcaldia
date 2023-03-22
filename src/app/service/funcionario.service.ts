import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {funcionario} from '../models/Funcionario';
@Injectable({
  providedIn: 'root'
})
export class funcionarioService {
  Api: string = 'http://localhost:8090/api/funcionario';
  

  Api2: string = 'http://localhost:8090/api/persona';

  Api3: string = 'http://localhost:8090/api/cargo';

  constructor(private clienteHttp:HttpClient) { }

  Addfuncionario(datofuncionario:funcionario):Observable<any>{
    return this.clienteHttp.post(this.Api,datofuncionario);
  }

  Listfuncionario(){
    return this.clienteHttp.get(this.Api);
    }

    Deletefuncionario(id:string):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    Obtenerfuncionario(id:string):Observable<any>{
      return this.clienteHttp.get(this.Api + "/"+id);
    }

    Updatefuncionario(datosfuncionario:funcionario):Observable<any>{
      return this.clienteHttp.put(this.Api,datosfuncionario);
    }

    
  Listpersona(){
    return this.clienteHttp.get(this.Api2);
    }

    Listcargo(){
        return this.clienteHttp.get(this.Api3);
        }
    

}
