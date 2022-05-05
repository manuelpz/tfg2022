import { Component, Input, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { PdfComponent } from '../pdf/pdf.component';

@Component({
  selector: 'app-ordenador-tarjeta',
  templateUrl: './ordenador-tarjeta.component.html',
  styleUrls: ['./ordenador-tarjeta.component.css']
})
export class OrdenadorTarjetaComponent implements OnInit {

  constructor(private Dispositivo:BdOrdenadoresService) { }
  @Input() ordenador:any
  ngOnInit(): void {
  }
  setDispositivo(dispositivo:string){
    return this.Dispositivo.setDispositivo(dispositivo)
  }
 
}
