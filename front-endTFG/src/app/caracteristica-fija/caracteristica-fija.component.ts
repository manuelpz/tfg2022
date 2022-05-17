import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caracteristicafija } from '../models/caracteristicafija';


@Component({
  selector: 'app-caracteristica-fija',
  templateUrl: './caracteristica-fija.component.html',
  styleUrls: ['./caracteristica-fija.component.css']
})
export class CaracteristicaFijaComponent implements OnInit {
  private  urlBase="http://localhost:8080/api/"
  caracteristica= ''
  constructor(private http: HttpClient, private toastr: ToastrService, private route: Router){ }

  ngOnInit(): void {
  }

  nuevaCaracteristica(){
    const caracteristica = new Caracteristicafija(this.caracteristica)
    this.http.post(this.urlBase+"nuevo/caracteristicafija", caracteristica).subscribe(
      data=>{
        this.toastr.success("Nueva caracteristica añadida", "¡Hecho!")
        this.route.navigate(['/dispositivos'])
        err=>{
          this.toastr.error("No hemos podido insertar la caracteristica", "ERROR")
          this.route.navigate(['/nueva-caracteristica-global'])
        }
      }
    )
  }



}
