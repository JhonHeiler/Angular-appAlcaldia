import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { evidenciaService } from 'src/app/service/evidencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-evidencia',
  templateUrl: './edit-evidencia.component.html',
  styleUrls: ['./edit-evidencia.component.css']
})
export class EditevidenciaComponent implements OnInit {
  formevidencia:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private evidenciaService:evidenciaService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_evidencia');
     

      this.evidenciaService.Obtenerevidencia(this.elID).subscribe(result =>{
        console.log("ssssssssssssss",result);
        this.formevidencia.setValue({
          nombre:result['nombre'],
          descripcion:result['descripcion'],
          ruta_almacenamiento:result['ruta_almacenamiento'],
          fecha_cargue:result['fecha_cargue'],
          estado:result['estado'],
          id_actividades_contrato:result['id_actividades_contrato'],
          id_prueba:result['id_prueba'],
          id_persona_carga:result['id_persona_carga']
        });
      }
      );
  
      this.formevidencia=this.formulario.group({
        nombre:[''],
        descripcion:[''],
        ruta_almacenamiento:[''],
        fecha_cargue:[''],
        estado:[''],
        id_actividades_contrato:[''],
        id_prueba:[''],
        id_persona_carga:['']
      })

     }

  ngOnInit(): void {
    console.log(this.elID);
  }

  enviarDatos():any {
    console.log
    this.evidenciaService.Updateevidencia({id_evidencia:this.elID,...this.formevidencia.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-evidencia');
    });

  }

}
