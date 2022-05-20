import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css'],
})
export class TiposComponent implements OnInit {

  tipos: any[] = [];
  roles: string[];
  isAdmin = false;
  constructor(private tokenService: TokenService, private htttp:HttpClient, private bd:BdOrdenadoresService) {}

  ngOnInit(): void {
    this.cargarTipos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }
cargarTipos(){
  return this.bd.getTipos()
}
  }

