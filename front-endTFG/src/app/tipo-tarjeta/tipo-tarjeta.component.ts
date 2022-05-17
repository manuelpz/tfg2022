import { Component, Input, OnInit } from '@angular/core';
import { CaracteristicasPropiasService } from '../service/caracteristicas-propias.service';

@Component({
  selector: 'app-tipo-tarjeta',
  templateUrl: './tipo-tarjeta.component.html',
  styleUrls: ['./tipo-tarjeta.component.css']
})
export class TipoTarjetaComponent implements OnInit {

  constructor(private caracteristicasService: CaracteristicasPropiasService) { }
  @Input() tipos:any
  ngOnInit(): void {
  }

  setTipo(tipo: any){
    return this.caracteristicasService.setTipo(tipo)
  }

}
