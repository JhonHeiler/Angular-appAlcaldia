import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { categoriaService } from 'src/app/service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditcategoriaComponent implements OnInit {
  formcategoria: FormGroup;
  elID: any;
  constructor(public formulario: FormBuilder,
    private categoriaService: categoriaService,
    private ruteador: Router,
    private activedRoute: ActivatedRoute) {
    this.elID = this.activedRoute.snapshot.paramMap.get('id_categoria');
    console.log(this.elID);

    this.categoriaService.Obtenercategoria(this.elID).subscribe(result => {
      console.log(result);

      this.formcategoria.setValue({
        categoria: result.categoria_documento
      });
    }
    );
    this.formcategoria = this.formulario.group(
      {
        categoria: [''],
      }
    );

  }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log(this.formcategoria.value)
    this.categoriaService.Updatecategoria({ 
      id_categoria: this.elID,
      categoria_documento: this.formcategoria.value.categoria
    }).subscribe(result=>{
      alert("Registro MODIFICADO con exito");  
      this.ruteador.navigateByUrl('/list-categoria');
    });
    

  }

}
