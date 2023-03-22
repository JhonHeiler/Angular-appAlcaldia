import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { PruebaService } from 'src/app/service/prueba.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-prueba',
  templateUrl: './add-prueba.component.html',
  styleUrls: ['./add-prueba.component.css']
})
export class AddPruebaComponent implements OnInit {
  formPrueba:FormGroup; 
  constructor(public formulario:FormBuilder,
    private pruebaService:PruebaService,
    private ruteador:Router ) {
      this.formPrueba=this.formulario.group({
        prueba:['']
      })
  
     }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log(this.formPrueba.value)
    this.pruebaService.AddPrueba(this.formPrueba.value).subscribe(result=>{
      alert("Registro agregado con exito")
      this.ruteador.navigateByUrl('/list-prueba');
    });

  }

}
