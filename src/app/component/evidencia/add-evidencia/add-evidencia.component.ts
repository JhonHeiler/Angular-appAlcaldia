import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { evidenciaService } from 'src/app/service/evidencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evidencia',
  templateUrl: './add-evidencia.component.html',
  styleUrls: ['./add-evidencia.component.css']
})
export class AddEvidenciaComponent implements OnInit {
  ListPersonaCarga: any;
  listActividadContrato: any;
  listPrueba: any;
  formevidencia: FormGroup;
  constructor(public formulario: FormBuilder,
    private evidenciaService: evidenciaService,
    private ruteador: Router) {
    this.formevidencia = this.formulario.group({
      nombre:[''],
      descripcion:[''],
      imagen:[''],
      ruta_almacenamiento:[''],
      fecha_cargue: [''],
      estado:[''],
      id_actividades_contrato:['Selecionar actividades de contrato'],
      id_prueba:['Selecionar Prueba'],
      id_persona_carga:['Selecionar persona carga']
    })

  }


  ngOnInit(): void {
    const mirar = this.evidenciaService.Listactividadescontrato().subscribe(result => { this.listActividadContrato = result });


    this.evidenciaService.Listprueba().subscribe(result => { this.listPrueba = result });


    this.evidenciaService.Listpersonacarga().subscribe(result => { this.ListPersonaCarga = result });

  }


  enviarDatos(): any {
    this.evidenciaService.Addevidencia(this.formevidencia.value).subscribe(result => {
      alert("Registro agregado con exito")
      this.ruteador.navigateByUrl('/list-evidencia');
    });

  }

  seledImage(e) {
    const file = e.target.files[0];
   this.formevidencia.get("ruta_almacenamiento").setValue(file.name);

   this.formevidencia.get("ruta_almacenamiento").value;
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // console.log(reader.result);
      this.formevidencia.get("imagen").setValue(reader.result)
    };
  }
}



