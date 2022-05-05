import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService) { }

  ngOnInit(): void {
  }
  getPdf(){
    this.bdOrdenadores.getIdPdf()
   
  }
  createPdf(){
    const pdfDefinition:any={
      content:[
        { qr: 'http://localhost:4200/dispositivo/'+this.bdOrdenadores.getIdPdf()  },

      ]
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}
