import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { tipodocumentoService} from 'src/app/service/tipodocumento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-tipo_documento',
  templateUrl: './edit-tipo-documento.component.html',
  styleUrls: ['./edit-tipo-documento.component.css']
})
export class Edittipo_documentoComponent implements OnInit {
  formtipo_documento:FormGroup;
  id_tipo_documento:string;
  constructor(public formulario:FormBuilder,
    private tipodocumentoService:tipodocumentoService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.id_tipo_documento=this.activedRoute.snapshot.paramMap.get('id_tipo_documento');
      console.log(this.id_tipo_documento);

      this.tipodocumentoService.Obtenertipodocumento(this.id_tipo_documento).subscribe(result =>{
        console.log(result);
        this.formtipo_documento.setValue({
          tipo_documento:result['tipo_documento'],
        });
      }
      );
      this.formtipo_documento = this.formulario.group(
        {
          tipo_documento:[''],
        }
      );
  
     }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log(this.formtipo_documento.value)
    this.tipodocumentoService.Updatetipodocumento({ 
      id_tipo_documento: this.id_tipo_documento,
      tipo_documento: this.formtipo_documento.value.tipo_documento
    }).subscribe(result=>{
      alert("Registro MODIFICADO con exito");  
      this.ruteador.navigateByUrl('/list-tipo_documento');
    });
  }

}

