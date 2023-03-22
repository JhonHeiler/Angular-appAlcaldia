import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { contratosService } from 'src/app/service/contratos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contratos',
  templateUrl: './edit-contratos.component.html',
  styleUrls: ['./edit-contratos.component.css']
})
export class EditcontratosComponent implements OnInit {
  formContratos:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private contratosService:contratosService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_contratos');


      this.contratosService.Obtenercontratos(this.elID).subscribe(result =>{
        console.log(result);
        this.formContratos.setValue({
          id_contratos:result['id_contratos'],
        });
      }
      );

      this.formContratos = this.formulario.group(
        {

          id_contratos:['']
        }
      );

     }

  ngOnInit(): void {}

  enviarDatos():any {
    console.log
    this.contratosService.Updatecontratos({id_contratos:this.elID,...this.formContratos.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-contratos');
    });

  }

}
