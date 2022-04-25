import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { OrdenadoresComponent } from './ordenadores/ordenadores.component';
import { PantallasComponent } from './pantallas/pantallas.component';
import { ImpresorasComponent } from './impresoras/impresoras.component';
import { OtrosComponent } from './otros/otros.component';
import { Page404Component } from './page404/page404.component';
import { AsideFiltrosOrdenadoresComponent } from './aside-filtros-ordenadores/aside-filtros-ordenadores.component';
import { ResultadosOrdenadoresComponent } from './resultados-ordenadores/resultados-ordenadores.component';
import { OrdenadorTarjetaComponent } from './ordenador-tarjeta/ordenador-tarjeta.component';
import { BdOrdenadoresService } from './bd-ordenadores.service';
import { HttpClientModule } from '@angular/common/http';
import { QrComponenteComponent } from './qr-componente/qr-componente.component';
import { FiltroMarcaPipe } from './filtro-marca.pipe';
import { CrearOrdenadoresComponent } from './crear-ordenadores/crear-ordenadores.component';
import { AsideFiltrosImpresorasComponent } from './aside-filtros-impresoras/aside-filtros-impresoras.component';
import { ResultadosImpresorasComponent } from './resultados-impresoras/resultados-impresoras.component';
import { ImpresorasTarjetaComponent } from './impresoras-tarjeta/impresoras-tarjeta.component';
import { ResultadosOtrosComponent } from './resultados-otros/resultados-otros.component';
import { OtrosTarjetaComponent } from './otros-tarjeta/otros-tarjeta.component';
import { AsideFiltrosOtrosComponent } from './aside-filtros-otros/aside-filtros-otros.component';
import { FiltroTiposPipe } from './filtro-tipos.pipe';
import { AsideFiltrosPantallasComponent } from './aside-filtros-pantallas/aside-filtros-pantallas.component';
import { PantallasTarjetaComponent } from './pantallas-tarjeta/pantallas-tarjeta.component';
import { ResultadosPantallasComponent } from './resultados-pantallas/resultados-pantallas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OrdenadoresComponent,
    PantallasComponent,
    ImpresorasComponent,
    OtrosComponent,
    Page404Component,
    AsideFiltrosOrdenadoresComponent,
    ResultadosOrdenadoresComponent,
    OrdenadorTarjetaComponent,
    QrComponenteComponent,
    FiltroMarcaPipe,
    CrearOrdenadoresComponent,
    AsideFiltrosImpresorasComponent,
    ResultadosImpresorasComponent,
    ImpresorasTarjetaComponent,
    ResultadosOtrosComponent,
    OtrosTarjetaComponent,
    AsideFiltrosOtrosComponent,
    FiltroTiposPipe,
    AsideFiltrosPantallasComponent,
    PantallasTarjetaComponent,
    ResultadosPantallasComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BdOrdenadoresService,BdOrdenadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
