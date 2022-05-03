import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPatronTipo'
})
export class FiltroPatronTipoPipe implements PipeTransform {
transform(todos: any[], pat:string): any {
    if(todos && todos.length){
    return todos.filter(todo => todo.tipo.toLowerCase().includes(pat.toLowerCase()))
    }
  }

}
