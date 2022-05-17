import { Component, Input, OnInit } from '@angular/core';
import { BdOrdenadoresService } from 'src/app/bd-ordenadores.service';

@Component({
  selector: 'app-caracteristica-tarjeta',
  templateUrl: './caracteristica-tarjeta.component.html',
  styleUrls: ['./caracteristica-tarjeta.component.css']
})
export class CaracteristicaTarjetaComponent implements OnInit {
@Input() caracteristica: any
  constructor(private Dispositivo: BdOrdenadoresService) { }

  ngOnInit(): void {
  }

  eliminarCaracteristica(id: number) {
    return this.Dispositivo.eliminarCaracteristica(id);
  }

}
