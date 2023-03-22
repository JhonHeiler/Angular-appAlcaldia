import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { secretariaService } from 'src/app/service/secretaria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-secretaria',
  templateUrl: './add-secretaria.component.html',
  styleUrls: ['./add-secretaria.component.css']
})
export class AddsecretariaComponent implements OnInit {
  listContratos:any;
  formSecretaria:FormGroup;
  constructor(public formulario:FormBuilder,
    private secretariaService:secretariaService,
    private ruteador:Router ) {
      this.formSecretaria=this.formulario.group({
        nombre:[''],
        id_contratos:['']
      })
  
     }

  ngOnInit(): void {
    this.secretariaService.ListContratos().subscribe(result =>{this.listContratos = result
    });
  }

  enviarDatos():any {
    this.secretariaService.Addsecretaria(this.formSecretaria.value).subscribe(result=>{
      alert("Registro agregado con exito")
      this.ruteador.navigateByUrl('/list-secretaria');
    });

  }

}
