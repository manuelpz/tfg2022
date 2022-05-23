import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { OpcionService } from '../service/opcion.service';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.css']
})
export class OpcionComponent implements OnInit {
opcion = ''
caracteristicaId: any
  constructor(private bdopciones: OpcionService,
    private bdOrdenadores: BdOrdenadoresService,) { }

  ngOnInit(): void {
    this.caracteristicaId = this.bdOrdenadores.getCaracteristicaId()
    console.log(this.caracteristicaId)
  }

  nuevaOpcion(){
    return this.bdopciones.postOpcion(this.opcion,this.caracteristicaId)
  }
}
