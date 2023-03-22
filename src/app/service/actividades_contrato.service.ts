import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';
import {actividades_contrato} from '../models/Actividades_contrato';
@Injectable({
  providedIn: 'root'
})
export class actividades_contratoService {
  Api: string = 'http://localhost:8090/api/actividadescontrato';

  Api2: string = 'http://localhost:8090/api/contratos';

  

  constructor(private clienteHttp:HttpClient) { }

  Addactividades_contrato(datoactividades_contrato:actividades_contrato):Observable<any>{
    return this.clienteHttp.post(this.Api,datoactividades_contrato);
  }

  Listactividades_contrato(){
    return this.clienteHttp.get(this.Api);
    }

    Deleteactividades_contrato(id:string):Observable<any>{
      return this.clienteHttp.delete(this.Api +"/"+id);
    }

    Obteneractividades_contrato(id:string):Observable<any>{
      return this.clienteHttp.get(this.Api + "/"+id);
    }

    Updateactividades_contrato(datosactividades_contrato:actividades_contrato):Observable<any>{
      return this.clienteHttp.put(this.Api,datosactividades_contrato );
    }

    
  Listcontratos(){
    return this.clienteHttp.get(this.Api2);
    }

   

}
