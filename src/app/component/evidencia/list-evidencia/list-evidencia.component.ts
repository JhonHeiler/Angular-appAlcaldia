import { Component, OnInit  } from '@angular/core';
import { evidenciaService } from 'src/app/service/evidencia.service';
import { GetPermissionService } from 'src/app/service/getPermissions.service';
import * as XLSX from 'xlsx';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-list-evidencia',
  templateUrl: './list-evidencia.component.html',
  styleUrls: ['./list-evidencia.component.css']
})
export class ListevidenciaComponent implements OnInit {
  public evidencias:any;
  puedeVer: boolean = false;
  puedeEliminar: boolean = false;
  puedeModificar: boolean = false;
  puedeCrear: boolean = false;

  constructor(
    private evidenciaService:evidenciaService,
    private getPermissionService: GetPermissionService

    ) {
      const permissions = this.getPermissionService.getPermissions();
      this.puedeVer = !!permissions.read;
      this.puedeEliminar = !!permissions.delete;
      this.puedeModificar = !!permissions.update;
      this.puedeCrear = !!permissions.create;
    }
  

  ngOnInit(): void {
    this.evidenciaService.Listevidencia().subscribe(result =>{this.evidencias = result
  });
}

createPDF(){
 
  const pdfDefinition: any = {
    content: [
      {
        text: 'Hola mundo',
      }
    ]
  }

  const pdf = pdfMake.createPdf(pdfDefinition);
  pdf.open();

}

  deleteevidencia(id:any, iControl:any){
    if(window.confirm("Desea borrar el registro?")){
    this.evidenciaService.Deleteevidencia(id).subscribe((respuesta)=>{
      this.evidencias.splice(iControl, 1)
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
