import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { personaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-persona',
  templateUrl: './add-persona.component.html',
  styleUrls: ['./add-persona.component.css']
})
export class AddpersonaComponent implements OnInit {
  ListPersonaCarga:any;
  listCargo: any;
  listRol: any;
  ListTipoDcoumento: any;
  formpersona:FormGroup;
  constructor(public formulario:FormBuilder,
    private personaService:personaService,
    private ruteador:Router ) {
      this.formpersona=this.formulario.group({
        documento:[''],
        nombre:[''],
        apellido:[''],
        sexo:[''],
        telefono:[''],
        correo:[''],
        id_cargo:[''],
        id_rol:[''],
        id_carga_persona:[''],
        id_tipo_documento:[''],
      })

     }

ngOnInit(): void {
  const mirar =this.personaService.Listcargo().subscribe(result =>{this.listCargo= result }); 


  this.personaService.Listrol().subscribe(result =>{this.listRol = result });

  this.personaService.Listrol().subscribe(result =>{this.listRol = result });



  this.personaService.Listcargapersona().subscribe(result =>{this.ListPersonaCarga = result }); 

  this.personaService.Listptipo_documento().subscribe(result =>{this.ListTipoDcoumento = result });


}


enviarDatos():any {
this.personaService.Addpersona(this.formpersona.value).subscribe(result=>{
  alert("Registro agregado con exito")
  this.ruteador.navigateByUrl('/list-persona'); 
});

}
}



