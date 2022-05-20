import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ParamFiltrosOrdenadoresService } from '../param-filtros-ordenadores.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-tipos-resultados',
  templateUrl: './tipos-resultados.component.html',
  styleUrls: ['./tipos-resultados.component.css'],
})
export class TiposResultadosComponent implements OnInit {
  roles: string[];
  isAdmin = false;
  constructor(
    private bdOrdenadores: BdOrdenadoresService,
    private paramsFiltros: ParamFiltrosOrdenadoresService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.getTipos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }
  getTipos() {
    return this.bdOrdenadores.getTipos();
  }
  getPatronTipo() {
    return this.paramsFiltros.getPatronTipo();
  }
}
