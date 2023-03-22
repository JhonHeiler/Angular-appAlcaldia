import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { funcionarioService } from 'src/app/service/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddfuncionarioComponent implements OnInit {
  Listpersona:any;
  Listcargo:any;
  formfuncionario:FormGroup;
  constructor(public formulario:FormBuilder,
    private funcionarioService:funcionarioService,
    private ruteador:Router ) {
      this.formfuncionario=this.formulario.group({
        ano:[''],
        id_persona:[''],
        id_cargo:['']

      })

     }

ngOnInit(): void {
  
  const mirar =this.funcionarioService.Listpersona().subscribe(result =>{this.Listpersona = result });
  console.log("ddddddddddddddddddddd",mirar);
  
    this.funcionarioService.Listcargo().subscribe(result =>{this.Listcargo = result
});
} 

enviarDatos():any {
this.funcionarioService.Addfuncionario(this.formfuncionario.value).subscribe(result=>{
  alert("Registro agregado con exito")
  this.ruteador.navigateByUrl('/List-permisos'); 

});

}


}
