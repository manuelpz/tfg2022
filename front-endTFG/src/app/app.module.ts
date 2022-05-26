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
import { CrearTipoComponent } from './crear-tipo/crear-tipo.component';
import { NuevoDispositivoComponent } from './dispositivo/nuevo-dispositivo/nuevo-dispositivo.component';
import { PdfComponent } from './pdf/pdf.component';
import { FullDispositivoComponent } from './dispositivo/full-dispositivo/full-dispositivo.component';
import { CaracteristicaFijaComponent } from './caracteristica-fija/caracteristica-fija.component';
import { CaracteristicasPropiasComponent } from './caracteristicas-propias/caracteristicas-propias.component';
import { ListadoCaracteristicasComponent } from './caracteristica-fija/listado-caracteristicas/listado-caracteristicas.component';
import { CaracteristicaTarjetaComponent } from './caracteristica-fija/caracteristica-tarjeta/caracteristica-tarjeta.component';
import { interceptorProvider } from './interceptors/disp-interceptor.service';
import { RouterModule } from '@angular/router';
import { ErrorAccesoComponent } from './error-acceso/error-acceso.component';
import { OpcionComponent } from './opcion/opcion.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './footer/footer.component';



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
    HeaderComponent,
    FooterComponent,

    FiltroPatronPipe,
       ObjToArrayPipe,
       TipoTarjetaComponent,
       TiposComponent,
       TiposResultadosComponent,
       AsideFiltrosTiposComponent,
       FiltroPatronTipoPipe,
       LoginComponent,
       RegistroComponent,
       CrearTipoComponent,
       NuevoDispositivoComponent,
       PdfComponent,
       ListadoCaracteristicasComponent,
        MenuComponent,
       FullDispositivoComponent,
       CaracteristicaFijaComponent,
       CaracteristicasPropiasComponent,
       CaracteristicaTarjetaComponent,
       ErrorAccesoComponent,
       OpcionComponent,
       MenuLoginComponent,
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    FormsModule,

  ],
  providers: [BdOrdenadoresService, interceptorProvider],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
