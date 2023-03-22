import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { personaService } from 'src/app/service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditpersonaComponent implements OnInit {
  formpersona:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private personaService:personaService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_persona');
     

      this.personaService.Obtenerpersona(this.elID).subscribe(result =>{
        console.log(result);
        this.formpersona.setValue({
          id_cargo:result['id_cargo'],
          id_rol:result['id_rol'],
          id_carga_persona:result['id_carga_persona'],
          id_tipo_documento:result['id_tipo_documento'],
          
          
        });
      }
      );
  
      this.formpersona = this.formulario.group(
        {
    
          id_cargo:[''],
          id_rol:[''],
          id_carga_persona:[''],
          id_tipo_documento:['']

        }
      );
  
     }

  ngOnInit(): void {
    console.log(this.elID);
  }

  enviarDatos():any {
    console.log
    this.personaService.Updatepersona({id_persona:this.elID,...this.formpersona.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-persona');
    });

  }

}
