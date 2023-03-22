import { Component, OnInit } from '@angular/core';
import { GetPermissionService } from 'src/app/service/getPermissions.service';
import { secretariaService } from 'src/app/service/secretaria.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list-secretaria',
  templateUrl: './list-secretaria.component.html',
  styleUrls: ['./list-secretaria.component.css']
})
export class ListsecretariaComponent implements OnInit {
  public secretarias: any;
  public Cargos: any;
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;
  constructor(
    private secretariaService: secretariaService,
    private getPermissionService: GetPermissionService
  ) {
    const permissions = this.getPermissionService.getPermissions();
    this.puedeVer = !!permissions.read;
    this.puedeEliminar = !!permissions.delete;
    this.puedeModificar = !!permissions.update;
    this.puedeCrear = !!permissions.create;
  }

  ngOnInit(): void {
    this.secretariaService.Listsecretaria().subscribe(result => {
      this.secretarias = result
    });
  }

  deletesecretaria(id: any, iControl: any) {
    if (window.confirm("Desea borrar el registro?")) {
      this.secretariaService.Deletesecretaria(id).subscribe((respuesta) => {
        this.secretarias.splice(iControl, 1)
      });
    }
  }
  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

}
