import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { tipodocumentoService } from 'src/app/service/tipodocumento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tipo_documento',
  templateUrl: './add-tipo-documento.component.html',
  styleUrls: ['./add-tipo-documento.component.css']
})
export class Addtipo_documentoComponent implements OnInit {
  formtipo_documento:FormGroup;
  constructor(public formulario:FormBuilder,
    private tipodocumentoService:tipodocumentoService,
    private ruteador:Router ) {
      this.formtipo_documento=this.formulario.group({
        tipo_documento:['']
      })
  
     }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log(this.formtipo_documento.value)
    this.tipodocumentoService.Addtipodocumento(this.formtipo_documento.value).subscribe(result=>{
      alert("Registro agregado con exito")
      this.ruteador.navigateByUrl('/list-tipo_documento');
    });

  }

}
