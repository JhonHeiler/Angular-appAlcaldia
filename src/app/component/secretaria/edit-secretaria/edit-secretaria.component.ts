import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { secretariaService } from 'src/app/service/secretaria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-secretaria',
  templateUrl: './edit-secretaria.component.html',
  styleUrls: ['./edit-secretaria.component.css']
})
export class EditsecretariaComponent implements OnInit {
  formsecretaria:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private secretariaService:secretariaService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_secretaria');
     

      this.secretariaService.Obtenersecretaria(this.elID).subscribe(result =>{
        console.log(result);
        this.formsecretaria.setValue({
          nombre:result['nombre'],
          id_contratos:result['id_contratos']
        });
      }
      );
  
      this.formsecretaria = this.formulario.group(
        {
          nombre:[''],
          id_contratos:['']
        }
      );
  
     }

  ngOnInit(): void {
    console.log(this.elID);
  }

  enviarDatos():any {
    console.log
    this.secretariaService.Updatesecretaria({id_secretaria:this.elID,...this.formsecretaria.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-secretaria');
    });

  }

}
