import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { oficinaService } from 'src/app/service/oficina.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-oficina',
  templateUrl: './edit-oficina.component.html',
  styleUrls: ['./edit-oficina.component.css']
})
export class EditoficinaComponent implements OnInit {
  formoficina:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private oficinaService:oficinaService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_oficina');
     

      this.oficinaService.Obteneroficina(this.elID).subscribe(result =>{
        console.log(result);
        this.formoficina.setValue({
          nombre:result['nombre'],
          id_secretaria:result['id_secretaria']
        });
      }
      );
  
      this.formoficina = this.formulario.group(
        {
          nombre:[''],
          id_secretaria:['']
        }
      );
  
     }

  ngOnInit(): void {
    console.log(this.elID);
  }

  enviarDatos():any {
    console.log
    this.oficinaService.Updateoficina({id_oficina:this.elID,...this.formoficina.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-oficina');
    });

  }

}
