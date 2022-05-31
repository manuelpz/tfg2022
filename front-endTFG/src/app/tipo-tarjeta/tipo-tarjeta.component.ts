import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CaracteristicasPropiasService } from '../service/caracteristicas-propias.service';

@Component({
  selector: 'app-tipo-tarjeta',
  templateUrl: './tipo-tarjeta.component.html',
  styleUrls: ['./tipo-tarjeta.component.css']
})
export class TipoTarjetaComponent implements OnInit {
  caracteristicas: any;
  constructor(private caracteristicasService: CaracteristicasPropiasService,
                      private http: HttpClient) { }
  @Input() tipos:any
  ngOnInit(): void { }

  setTipo(tipo: any){
    return this.caracteristicasService.setTipo(tipo)
  }

  eliminarCaracteristica(caracteristica: any){
    this.http.delete('http://localhost:8080/api/caracteristica/'+caracteristica.id).subscribe(
      res => {
        window.location.reload()
      }
    )
  }
}
