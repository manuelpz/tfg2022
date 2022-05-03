import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPatron'
})
export class FiltroPatronPipe implements PipeTransform {

  transform(todos: any[], pat:string): any {
    if(todos && todos.length){
    /*return todos.filter(todo => todo.tipo.tipo.toLowerCase().includes(pat.toLowerCase()) ||
     todo.resultados[0].opcion.opcion.toLowerCase().includes(pat.toLowerCase()))
    }
      return todos*/
    let elegidos = new Array()
    todos.forEach(disp=>{
	    if (disp.tipo.tipo.toLowerCase().includes(pat.toLowerCase())) {
		    elegidos.push(disp)
	    } else {
      if(disp.resultados && disp.resultados.length){
		    disp.resultados.forEach((res: { opcion: { opcion: string }; })=>{
			if (res.opcion.opcion.toLowerCase().includes(pat.toLowerCase())) {
				elegidos.push(disp)
			}
    
  
		})
  }
  }
})
return elegidos



    }
  }
}
