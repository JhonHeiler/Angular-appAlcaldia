import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { funcionarioService } from 'src/app/service/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditfuncionarioComponent implements OnInit {
  formfuncionario:FormGroup;
  elID:any;
  constructor(public formulario:FormBuilder,
    private funcionarioService:funcionarioService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.elID=this.activedRoute.snapshot.paramMap.get('id_funcionario');
     

      this.funcionarioService.Obtenerfuncionario(this.elID).subscribe(result =>{
        console.log(result);
        this.formfuncionario.setValue({
          id_persona:result['id_persona'],
          id_rol:result['id_rol']
        });
      }
      );
  
      this.formfuncionario = this.formulario.group(
        {
    
          id_persona:[''],
          id_rol:['']
        }
      );
  
     }

  ngOnInit(): void {
    console.log(this.elID);
  }

  enviarDatos():any {
    console.log
    this.funcionarioService.Updatefuncionario({id_funcionario:this.elID,...this.formfuncionario.value}).subscribe(result=>{
      alert("Modificar con exito");
      this.ruteador.navigateByUrl('/list-funcionario');
    });

  }

}
