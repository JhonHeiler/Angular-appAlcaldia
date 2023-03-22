import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { PruebaService } from 'src/app/service/prueba.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-prueba',
  templateUrl: './edit-prueba.component.html',
  styleUrls: ['./edit-prueba.component.css']
})
export class EditPruebaComponent implements OnInit {
  formPrueba:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private pruebaService:PruebaService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_prueba');
      console.log(this.elID);

      this.pruebaService.Obtenerprueba(this.elID).subscribe(result =>{
        console.log(result);
        this.formPrueba.setValue({
          prueba:result[0]['prueba']
        });
      }
      );
      this.formPrueba = this.formulario.group(
        {
          prueba:[''],
        }
      );
  
     }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log
    this.pruebaService.UpdatePrueba({id_prueba:this.elID,...this.formPrueba.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-prueba');
    });

  }

}
