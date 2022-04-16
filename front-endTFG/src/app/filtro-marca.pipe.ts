import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'filtroMarca'
})
export class FiltroMarcaPipe implements PipeTransform {

  private rura=new Array()
  transform(ordenadores: any[], marca: string): any[] {
    if(ordenadores && ordenadores.length){
     for(let ordenador of ordenadores){
       for(let i = 0; i < ordenador.resultados.length; i++){
        if(ordenador.resultados[i].opcion.opcion.toLowerCase().indexOf(marca.toLowerCase())>-1){
         this.rura.push(ordenador)
       }
     }
      //he aqui un gran problema--------------------------------------------------------------------------------------
    }
  }
      return this.rura

}}
