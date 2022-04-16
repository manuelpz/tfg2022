import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'filtroMarca'
})
export class FiltroMarcaPipe implements PipeTransform {
  
  private rura=new Array()
  transform(ordenadores: any[], marca: string): any[] {
    if(ordenadores && ordenadores.length){
     
      //he aqui un gran problema---------------------------------------------------------------------------------------
      
      return ordenadores.filter(ordenador=>ordenador.resultados[0].opcion.opcion==marca)
      
      
    }else{
      return ordenadores
    }
    
  }

}
