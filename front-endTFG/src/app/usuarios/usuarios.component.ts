import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getUsuarios()
  }

public getUsuarios(){
return this.usuariosService.getUsuarios()
}

public eliminarUsuario(id: any){
  this.usuariosService.eliminarUsuario(id)
  return this.usuariosService.getUsuarios()
}

}
