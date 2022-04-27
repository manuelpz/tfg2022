import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';

@Component({
  selector: 'app-crear-ordenadores',
  templateUrl: './crear-ordenadores.component.html',
  styleUrls: ['./crear-ordenadores.component.css']
})
export class CrearOrdenadoresComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService) { }

  ngOnInit(): void {
  }

  salir(){
    return this.bdOrdenadores.salir()
  }

  enviarDatos(){
   // this.bdOrdenadores.postOrdenador('http://localhost:8080/api/dispositivo',this.form.value())
  }

  borrarUltimo(){
    //PENDIENTE DE REALIZAR
  }

}