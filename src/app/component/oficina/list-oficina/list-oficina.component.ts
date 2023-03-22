import { Component, OnInit } from '@angular/core';
import { GetPermissionService } from 'src/app/service/getPermissions.service';
import { oficinaService } from 'src/app/service/oficina.service';


@Component({
  selector: 'app-list-oficina',
  templateUrl: './list-oficina.component.html',
  styleUrls: ['./list-oficina.component.css']
})
export class ListoficinaComponent implements OnInit {
  public oficinas:any;
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private oficinaService:oficinaService,
    private getPermissionService: GetPermissionService
    ) {
      const permissions = this.getPermissionService.getPermissions();
      this.puedeVer = !!permissions.read;
      this.puedeEliminar = !!permissions.delete;
      this.puedeModificar = !!permissions.update;
      this.puedeCrear = !!permissions.create;
    }

  ngOnInit(): void {
    this.oficinaService.Listoficina().subscribe(result =>{this.oficinas = result
  });
}

  deleteoficina(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.oficinaService.Deleteoficina(id).subscribe((respuesta)=>{
      this.oficinas.splice(iControl, 1)
    });
  }
  }

}
