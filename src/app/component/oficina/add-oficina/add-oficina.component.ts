import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { oficinaService } from 'src/app/service/oficina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-oficina',
  templateUrl: './add-oficina.component.html',
  styleUrls: ['./add-oficina.component.css']
})
export class AddoficinaComponent implements OnInit {
  listsecretaria:any;
  formoficina:FormGroup;
  constructor(public formulario:FormBuilder,
    private oficinaService:oficinaService,
    private ruteador:Router ) {
      this.formoficina=this.formulario.group({
        nombre:[''],
        id_secretaria:['']
      })
  
     }

  ngOnInit(): void {
    this.oficinaService.Listsecretaria().subscribe(result =>{this.listsecretaria = result
    });
  }

  enviarDatos():any {
    this.oficinaService.Addoficina(this.formoficina.value).subscribe(result=>{
      alert("Registro agregado con exito")
      this.ruteador.navigateByUrl('/list-oficina');
    });

  }

}
