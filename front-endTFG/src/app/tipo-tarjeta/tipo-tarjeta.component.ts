import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CaracteristicasPropiasService } from '../service/caracteristicas-propias.service';

@Component({
  selector: 'app-tipo-tarjeta',
  templateUrl: './tipo-tarjeta.component.html',
  styleUrls: ['./tipo-tarjeta.component.css'],
})
export class TipoTarjetaComponent implements OnInit {
  caracteristicas: any
  dispositivos: any
  constructor(
    private caracteristicasService: CaracteristicasPropiasService,
    private http: HttpClient
  ) {}
  @Input() tipos: any;
  ngOnInit(): void {}

  setTipo(tipo: any) {
    return this.caracteristicasService.setTipo(tipo);
  }

  eliminarCaracteristica(caracteristica: any) {
    this.http
      .delete('http://localhost:8080/api/caracteristica/' + caracteristica.id)
      .subscribe((res) => {
        window.location.reload();
      });
  }

  eliminarTipo() {
    this.http.get('http://localhost:8080/api/tipo/'+this.tipos.tipo).subscribe((response) => {
      this.dispositivos = response
      if (this.dispositivos.dispositivos.length == 0) {
        console.log(this.tipos.dispositivos.length)
        this.http
          .delete('http://localhost:8080/api/tipo/' + this.tipos.id)
          .subscribe((res) => {
            window.location.reload();
          });
          } else {
            console.log(this.dispositivos.dispositivos.length)
            alert(
              'No se puede eliminar el tipo porque tiene dispositivos asociados'
              );
            }
    });
  }
}
