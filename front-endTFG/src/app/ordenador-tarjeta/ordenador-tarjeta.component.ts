import { Component, Input, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';

@Component({
  selector: 'app-ordenador-tarjeta',
  templateUrl: './ordenador-tarjeta.component.html',
  styleUrls: ['./ordenador-tarjeta.component.css'],
})
export class OrdenadorTarjetaComponent implements OnInit {
  constructor(private Dispositivo: BdOrdenadoresService) {}
  @Input() ordenador: any;
  ngOnInit(): void {}
  setDispositivo(dispositivo: string) {
    return this.Dispositivo.setDispositivo(dispositivo);
  }


  eliminarDispositivo(id: number) {
    return this.Dispositivo.eliminarDispositivo(id);
  }
  ultimo(array:any){
    array=this.ordenador
    let arrayfil = array[array.length-1]
    console.log(this.ordenador)
    return arrayfil
  }

  setUltimoDispositivo(dispositivo: string) {
    return this.Dispositivo.setUltimoDispositivo(dispositivo);
  }
}
