import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios:any[] = []
  urlUsuarios = "http://localhost:8080/usuario/"
  constructor(private http: HttpClient, private toastr:ToastrService) {

    this.http.get(this.urlUsuarios+'listado').subscribe(
      (data:any) =>{
       this.usuarios = data})
   }
public actualizarUsuarios(){
  this.http.get(this.urlUsuarios+'listado').subscribe(
    (data:any) =>{
     this.usuarios = data})
}
public getUsuarios(){
  return this.usuarios
}

public eliminarUsuario(id: any){
this.http.delete(this.urlUsuarios+'eliminar/'+id, {responseType: 'text'}).subscribe(
  data=>{
    this.toastr.success('Usuario eliminado correctamente', 'Eliminado')
    this.usuarios= new Array()
  this.actualizarUsuarios()
    })
  }
}
