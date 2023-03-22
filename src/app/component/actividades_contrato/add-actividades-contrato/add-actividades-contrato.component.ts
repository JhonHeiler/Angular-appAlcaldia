import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { actividades_contratoService } from 'src/app/service/actividades_contrato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-actividades_contrato',
  templateUrl: './add-actividades-contrato.component.html',
  styleUrls: ['./add-actividades-contrato.component.css']
})
export class Addactividades_contratoComponent implements OnInit {
  Listcontratos:any;
  formactividades_contrato:FormGroup;
  constructor(public formulario:FormBuilder,
    private actividades_contratoService:actividades_contratoService,
    private ruteador:Router ) {
      this.formactividades_contrato=this.formulario.group({
        id_contratos:[''],
        indicador_de_resultado:[''],
        nombre_actividad:['']

      })

     }

ngOnInit(): void {

  const mirar =this.actividades_contratoService.Listcontratos().subscribe(result =>{this.Listcontratos = result });
  
} 

enviarDatos():any {
this.actividades_contratoService.Addactividades_contrato(this.formactividades_contrato.value).subscribe(result=>{
  alert("Registro agregado con exito")
  this.ruteador.navigateByUrl('/list-permisos'); 

});

}


}
