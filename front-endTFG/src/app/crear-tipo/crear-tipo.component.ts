import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BdOrdenadoresService } from '../bd-ordenadores.service';

@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.css'],
})
export class CrearTipoComponent implements OnInit {
  constructor(private bdOrdenadores: BdOrdenadoresService,
    private toastr:ToastrService) {}

  ngOnInit(): void {}
  setCrearTipo(crearTipo: string) {
    if(crearTipo.trim().length!=0){
    this.bdOrdenadores.setCrearTipos(crearTipo);
  }
  else{
    this.toastr.error('El tipo no puede estar vacio', 'ERROR')
  }
}
  JsonTipo() {
    this.bdOrdenadores.JsonTipo();
  }
}
