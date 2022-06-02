import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caracteristica } from '../models/caracteristicas/caracteristica';
import { OpcionNueva } from '../models/opciones/opcion-nueva';

@Injectable({
  providedIn: 'root'
})
export class OpcionService {
  private urlBase= "http://localhost:8080/api/opcion"
  constructor( private http: HttpClient,
                      private router:Router,
                      private toastr: ToastrService) { }

  postOpcion(opcion: string, caracteristica: any){
    const nuevaOpcion =  new OpcionNueva (opcion, new Caracteristica(caracteristica) )
    this.http.post(this.urlBase, nuevaOpcion).subscribe(
      (response) => {
        this.router.navigate(['/caracteristicas'])
        this.toastr.success('Opcion creada correctamente', '¡Hecho!');
    },
    (error) => {
      this.toastr.error('Esta opcion ya', '¡Error!');
    })
  }
}
