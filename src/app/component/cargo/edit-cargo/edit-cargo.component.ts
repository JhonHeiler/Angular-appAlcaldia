import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { CargoService } from 'src/app/service/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-cargo',
  templateUrl: './edit-cargo.component.html',
  styleUrls: ['./edit-cargo.component.css']
})
export class EditCargoComponent implements OnInit {
  formCargo:FormGroup;
  id_cargo:string;
  constructor(public formulario:FormBuilder,
    private cargoService:CargoService,
    private ruteador:Router,
    private activedRoute:ActivatedRoute ) {
      this.id_cargo=this.activedRoute.snapshot.paramMap.get('id_cargo');
      console.log(this.id_cargo);

      this.cargoService.ObtenerCargo(this.id_cargo).subscribe(result =>{
        console.log(result);
        this.formCargo.setValue({
          cargo:result['cargo'],
        });
      }
      );
      this.formCargo = this.formulario.group(
        {
          cargo:[''],
        }
      );
  
     }

  ngOnInit(): void {
  }

  enviarDatos():any {
    console.log(this.formCargo.value)
    this.cargoService.UpdateCargo({ 
      id_cargo: this.id_cargo,
      cargo: this.formCargo.value.cargo
    }).subscribe(result=>{
      alert("Registro MODIFICADO con exito");  
      this.ruteador.navigateByUrl('/list-cargo');
    });
    

  }

}

