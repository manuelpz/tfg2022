import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTipos'
})
export class FiltroTiposPipe implements PipeTransform {

  transform(tipo: any[], tip: string=""): any[] {
    if (tipo && tipo.length) {
      return tipo.filter(tipo => tipo.tipo.id_tipo.includes(tip))
    }
    return tipo
  }

}
