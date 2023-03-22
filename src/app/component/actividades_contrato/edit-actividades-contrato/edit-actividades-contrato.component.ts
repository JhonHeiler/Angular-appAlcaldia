import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { actividades_contratoService } from 'src/app/service/actividades_contrato.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-actividades_contrato',
  templateUrl: './edit-actividades-contrato.component.html',
  styleUrls: ['./edit-actividades-contrato.component.css'],
})
export class Editactividades_contratoComponent implements OnInit {
  formactividades_contrato:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private actividades_contratoService:actividades_contratoService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_actividades_contrato');
     

      this.actividades_contratoService.Obteneractividades_contrato(this.elID).subscribe(result =>{
        console.log(result);
        this.formactividades_contrato.setValue({
          id_actividades_contrato:result['id_actividades_contrato']
         
        });
      }
      );
  
      this.formactividades_contrato = this.formulario.group(
        {
    
          id_actividades_contrato:['']
        }
      );
  
     }

  ngOnInit(): void {
    console.log(this.elID);
  }

  enviarDatos():any {
    console.log
    this.actividades_contratoService.Updateactividades_contrato({id_actividades_contrato:this.elID,...this.formactividades_contrato.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-actividades_contrato');
    });

  }

}
