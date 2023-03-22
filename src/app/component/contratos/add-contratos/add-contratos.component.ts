import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { contratosService } from 'src/app/service/contratos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contratos',
  templateUrl: './add-contratos.component.html',
  styleUrls: ['./add-contratos.component.css']
})
export class AddContratosComponent implements OnInit {
  Listpersona:any;
  formcontratos:FormGroup;
  constructor(public formulario:FormBuilder,
    private contratosService:contratosService,
    private ruteador:Router ) {
      this.formcontratos=this.formulario.group({
        objeto:[''],
        valor:[''],
        secretaria:[''],
        ano_de_contrato:[''],
        cdp:[''],
        rp:[''],
        id_persona:['']

      })

     }

ngOnInit(): void {
  const mirar =this.contratosService.Listpersona().subscribe(result =>{this.Listpersona = result }); 
}


enviarDatos():any {
console.log("sssssssss",this.formcontratos.value);

this.contratosService.Addcontratos(this.formcontratos.value).subscribe(result=>{
  alert("Registro agregado con exito")
  this.ruteador.navigateByUrl('/list-contratos'); 

});

}
}



