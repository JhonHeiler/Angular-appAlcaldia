import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/service/cargo.service';
import { GetPermissionService } from 'src/app/service/getPermissions.service';

@Component({
  selector: 'app-list-cargo',
  templateUrl: './list-cargo.component.html',
  styleUrls: ['./list-cargo.component.css'],
})
export class ListCargoComponent implements OnInit {
  public Cargos: any;
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private cargoService: CargoService,
    private getPermissionService: GetPermissionService
  ) {
    const permissions = this.getPermissionService.getPermissions();
    this.puedeVer = !!permissions.read;
    this.puedeEliminar = !!permissions.delete;
    this.puedeModificar = !!permissions.update;
    this.puedeCrear = !!permissions.create;
  }

  ngOnInit(): void {
    this.cargoService.ListCargo().subscribe((result) => {
      this.Cargos = result;
    });
  }

  deleteCargo(id: any, iControl: any) {
    if (window.confirm('Desea borrar el registro?')) {
      this.cargoService.DeleteCargo(id).subscribe((respuesta) => {
        this.Cargos.splice(iControl, 1);
      });
    }
  }
}
