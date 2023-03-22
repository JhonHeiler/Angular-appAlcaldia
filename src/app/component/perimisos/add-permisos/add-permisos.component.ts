import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { permisosService } from 'src/app/service/permisos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-permisos',
  templateUrl: './add-permisos.component.html',
  styleUrls: ['./add-permisos.component.css']
})
export class AddpermisosComponent implements OnInit {
  listPesonas:any;
  listRoles:any;
  formpermisos:FormGroup;
  constructor(public formulario:FormBuilder,
    private permisosService:permisosService,
    private ruteador:Router ) {
      this.formpermisos=this.formulario.group({
        id_persona:[''],
        id_rol:['']
      })
  
     }

  ngOnInit(): void {
  
      this.permisosService.Listpersona().subscribe(result =>{this.listPesonas = result });
        this.permisosService.Listrol().subscribe(result =>{this.listRoles = result
    });
  }

  enviarDatos():any {
    this.permisosService.Addpermisos(this.formpermisos.value).subscribe(result=>{
      alert("Registro agregado con exito")
      this.ruteador.navigateByUrl('/list-permisos'); 

    });

  }


}
