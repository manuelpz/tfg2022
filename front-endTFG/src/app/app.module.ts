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
import { TipoTarjetaComponent } from './tipo-tarjeta/tipo-tarjeta.component';
import { TiposComponent } from './tipos/tipos.component';
import { TiposResultadosComponent } from './tipos-resultados/tipos-resultados.component';
import { AsideFiltrosTiposComponent } from './aside-filtros-tipos/aside-filtros-tipos.component';
import { FiltroPatronTipoPipe } from './filtro-patron-tipo.pipe';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule,ToastContainerModule } from 'ngx-toastr';
import { NuevoDispositivoComponent } from './dispositivo/nuevo-dispositivo/nuevo-dispositivo.component';




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
       TipoTarjetaComponent,
       TiposComponent,
       TiposResultadosComponent,
       AsideFiltrosTiposComponent,
       FiltroPatronTipoPipe,
       LoginComponent,
       RegistroComponent,
       MenuComponent,
       NuevoDispositivoComponent



  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    FormsModule
  ],
  providers: [BdOrdenadoresService,BdOrdenadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
