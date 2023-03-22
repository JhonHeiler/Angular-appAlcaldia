import { Component, OnInit } from '@angular/core';
import { contratosService } from 'src/app/service/contratos.service';
import { GetPermissionService } from 'src/app/service/getPermissions.service';


@Component({
  selector: 'app-list-contratos',
  templateUrl: './list-contratos.component.html',
  styleUrls: ['./list-contratos.component.css']
})
export class ListcontratosComponent implements OnInit {
  public contratoss:any;
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private contratosService:contratosService,
    private getPermissionService: GetPermissionService
    ) {
    const permissions = this.getPermissionService.getPermissions();
    this.puedeVer = !!permissions.read;
    this.puedeEliminar = !!permissions.delete;
    this.puedeModificar = !!permissions.update;
    this.puedeCrear = !!permissions.create;
  }


  ngOnInit(): void {
    this.contratosService.Listcontratos().subscribe(result =>{this.contratoss = result
  });
}

  deletecontratos(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.contratosService.Deletecontratos(id).subscribe((respuesta)=>{
      this.contratoss.splice(iControl, 1)
    });
  }
  }

}
