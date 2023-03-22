import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { CargoService } from 'src/app/service/cargo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cargo',
  templateUrl: './add-cargo.component.html',
  styleUrls: ['./add-cargo.component.css']
})
export class AddCargoComponent implements OnInit {
  formCargo:FormGroup;
  constructor(public formulario:FormBuilder,
    private cargoService:CargoService,
    private ruteador:Router ) {
      this.formCargo=this.formulario.group({
        cargo:['']
      })
  
     }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log(this.formCargo.value)
    this.cargoService.AddCargo(this.formCargo.value).subscribe(result=>{
      alert("Registro agregado con exito")
      this.ruteador.navigateByUrl('/list-cargo');
    });

  }

}
