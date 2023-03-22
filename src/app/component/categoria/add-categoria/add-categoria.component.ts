import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { categoriaService } from 'src/app/service/categoria.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddcategoriaComponent implements OnInit {
  formcategoria:FormGroup; 
  constructor(public formulario:FormBuilder,
    private categoriaService:categoriaService,
    private ruteador:Router ) {
      this.formcategoria=this.formulario.group({
        categoria_documento:['']
      })
  
     }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log(this.formcategoria.value)
    this.categoriaService.Addcategoria(this.formcategoria.value).subscribe( result=>{
      alert("Registro agregado con exito")
      this.ruteador.navigateByUrl('/list-categoria');
      console.log(result);
      
    });

  }

}
