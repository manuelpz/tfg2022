import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ParamFiltrosOrdenadoresService } from '../param-filtros-ordenadores.service';

@Component({
  selector: 'app-aside-filtros-ordenadores',
  templateUrl: './aside-filtros-ordenadores.component.html',
  styleUrls: ['./aside-filtros-ordenadores.component.css']
})
export class AsideFiltrosOrdenadoresComponent implements OnInit {

  private urlPost = "http://localhost:8080/api/dispositivo"
  constructor(private bdOrdenadores:BdOrdenadoresService,private paramsFiltros:ParamFiltrosOrdenadoresService) { }

  ngOnInit(): void {
  }
getOrdenadores(){
  return this.bdOrdenadores.getOrdenadores()
}
setMarca(unMarca:string){
  this.paramsFiltros.setMarca(unMarca)
  }

nuevoPc():any{
   return this.bdOrdenadores.postOrdenador(this.urlPost,
    {
    tipo:{
      id: this.bdOrdenadores.getOrdenadores()[0].tipo.id,
    }
  }).subscribe((response)=>{
    console.log("enviado")

})
  }
}
