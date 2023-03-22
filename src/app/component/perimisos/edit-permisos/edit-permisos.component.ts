import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { permisosService } from 'src/app/service/permisos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-permisos',
  templateUrl: './edit-permisos.component.html',
  styleUrls: ['./edit-permisos.component.css']
})
export class EditpermisosComponent implements OnInit {
  formpermisos:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private permisosService:permisosService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_permisos');
     

      this.permisosService.Obtenerpermisos(this.elID).subscribe(result =>{
        console.log(result);
        this.formpermisos.setValue({
          id_persona:result['id_persona'],
          id_rol:result['id_rol']
        });
      }
      );
  
      this.formpermisos = this.formulario.group(
        {
    
          id_persona:[''],
          id_rol:['']
        }
      );
  
     }

  ngOnInit(): void {
    console.log(this.elID);
  }

  enviarDatos():any {
    this.permisosService.Updatepermisos
    ({id_permisos:this.elID,...this.formpermisos.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-permisos');
    });

  }

}
