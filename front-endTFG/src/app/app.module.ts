import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { OrdenadoresComponent } from './ordenadores/ordenadores.component';
import { Page404Component } from './page404/page404.component';
import { AsideFiltrosOrdenadoresComponent } from './aside-filtros-ordenadores/aside-filtros-ordenadores.component';
import { ResultadosOrdenadoresComponent } from './resultados-ordenadores/resultados-ordenadores.component';
import { OrdenadorTarjetaComponent } from './ordenador-tarjeta/ordenador-tarjeta.component';
import { BdOrdenadoresService } from './bd-ordenadores.service';
import { HttpClientModule } from '@angular/common/http';
import { QrComponenteComponent } from './qr-componente/qr-componente.component';

import { FiltroPatronPipe } from './filtro-patron.pipe';
import { ObjToArrayPipe } from './obj-to-array.pipe';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OrdenadoresComponent,

    Page404Component,
    AsideFiltrosOrdenadoresComponent,
    ResultadosOrdenadoresComponent,
    OrdenadorTarjetaComponent,
    QrComponenteComponent,
  
    FiltroPatronPipe,
       ObjToArrayPipe,
 
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BdOrdenadoresService,BdOrdenadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
