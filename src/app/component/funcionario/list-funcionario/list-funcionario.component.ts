import { Component, OnInit } from '@angular/core';
import { funcionarioService } from 'src/app/service/funcionario.service';
import { GetPermissionService } from 'src/app/service/getPermissions.service';


@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListfuncionarioComponent implements OnInit {
  public funcionarios:any;
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private funcionarioService:funcionarioService,
    private getPermissionService: GetPermissionService
    ) {
      const permissions = this.getPermissionService.getPermissions();
      this.puedeVer = !!permissions.read;
      this.puedeEliminar = !!permissions.delete;
      this.puedeModificar = !!permissions.update;
      this.puedeCrear = !!permissions.create;
    }
  ngOnInit(): void {
    this.funcionarioService.Listfuncionario().subscribe(result =>{this.funcionarios = result
  });
}

  deletefuncionario(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.funcionarioService.Deletefuncionario(id).subscribe((respuesta)=>{
      this.funcionarios.splice(iControl, 1)
    });
  }
  }

}
