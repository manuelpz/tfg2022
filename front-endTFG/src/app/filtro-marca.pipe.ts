import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'filtroMarca'
})
export class FiltroMarcaPipe implements PipeTransform {


  transform(ordenadores: any[], marca: string=""): any[] {
    if (ordenadores && ordenadores.length) {
      return ordenadores.filter(ordenadores => ordenadores.resultados[0].opcion.id_opcion.includes(marca))
    }
    return ordenadores
  }

}