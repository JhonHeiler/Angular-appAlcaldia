import { Component, OnInit } from '@angular/core';
import { GetPermissionService } from 'src/app/service/getPermissions.service';
import { PruebaService } from 'src/app/service/prueba.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list-prueba',
  templateUrl: './list-prueba.component.html',
  styleUrls: ['./list-prueba.component.css']
})
export class ListPruebaComponent implements OnInit {
  public prueba: any;
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private PruebaService: PruebaService,
    private getPermissionService: GetPermissionService
  ) {
    const permissions = this.getPermissionService.getPermissions();
    this.puedeVer = !!permissions.read;
    this.puedeEliminar = !!permissions.delete;
    this.puedeModificar = !!permissions.update;
    this.puedeCrear = !!permissions.create;
  }


  ngOnInit(): void {
    this.PruebaService.Listprueba().subscribe(result =>{console.log(result);
      this.prueba =result;
  });
}

  deletePrueba(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.PruebaService.DeletePrueba(id).subscribe((respuesta)=>{
      this.prueba.splice(iControl, 1)
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
