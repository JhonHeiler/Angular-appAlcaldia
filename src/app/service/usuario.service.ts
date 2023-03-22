// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';

// import { usuario } from '../models/Usuario';
// @Injectable({
//   providedIn: 'root'
// })
// export class usuarioService {
//   Api: string = 'http://localhost:8090/api/usuario';

//   constructor(private clienteHttp:HttpClient) { }

//   async login(email:String,password:String){
    
//     try{
//       return await this.clienteHttp.signInWthnEmailandPassword(email,password)

//       } catch (err){

//       }

//     }
    
//   }


//   // Listusuario(){
//   //   return this.clienteHttp.get(this.Api);
//   //   }

//   //   Deleteusuario(id:any):Observable<any>{
//   //     return this.clienteHttp.delete(this.Api +"/"+id);
//   //   }

//   //   Obtenerusuario(id:any):Observable<any>{
//   //     return this.clienteHttp.get(this.Api,id);
//   //   }

//   //   Updateusuario(datosusuario:usuario):Observable<any>{
//   //     return this.clienteHttp.put(this.Api,datosusuario);
//   //   }                            


