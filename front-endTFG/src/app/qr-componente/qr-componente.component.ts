import { Component, Input, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-qr-componente',
  templateUrl: './qr-componente.component.html',
  styleUrls: ['./qr-componente.component.css']
})
export class QrComponenteComponent implements OnInit {
  dispositivo = ""
  constructor(private Dispositivo:BdOrdenadoresService,private rutaActiva: ActivatedRoute) { }
  @Input() dis:any
  ngOnInit(): void {
    this.dispositivo =  this.rutaActiva.snapshot.params['id']
    this.Dispositivo.setDispositivo(this.dispositivo)
  }
getDispositivo(){

  return this.Dispositivo.getDispotivo()
}
estaCargando(){
  return this.Dispositivo.estaCargando()
}

}
