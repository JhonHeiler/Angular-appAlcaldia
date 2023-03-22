import { Component, OnInit } from '@angular/core';
import { categoriaService } from 'src/app/service/categoria.service';
import { GetPermissionService } from 'src/app/service/getPermissions.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListcategoriaComponent implements OnInit {
  public categorias:any
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private categoriaService:categoriaService,
    private getPermissionService: GetPermissionService
     ) {
    const permissions = this.getPermissionService.getPermissions();
    this.puedeVer = !!permissions.read;
    this.puedeEliminar = !!permissions.delete;
    this.puedeModificar = !!permissions.update;
    this.puedeCrear = !!permissions.create;
  }

  ngOnInit(): void {
    this.categoriaService.Listcategoria().subscribe(result =>{console.log(result);
      this.categorias =result;
  });
}

  deletecategoria(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.categoriaService.Deletecategoria(id).subscribe((respuesta)=>{
      this.categorias.splice(iControl, 1)
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
