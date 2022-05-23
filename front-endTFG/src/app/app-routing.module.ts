import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { CrearTipoComponent } from './crear-tipo/crear-tipo.component';
import { NavComponent } from './nav/nav.component';
import { NuevoDispositivoComponent } from './dispositivo/nuevo-dispositivo/nuevo-dispositivo.component';
import { OrdenadoresComponent } from './ordenadores/ordenadores.component';
import { Page404Component } from './page404/page404.component';
import { QrComponenteComponent } from './qr-componente/qr-componente.component';
import { TiposComponent } from './tipos/tipos.component';
import { FullDispositivoComponent } from './dispositivo/full-dispositivo/full-dispositivo.component';
import { CaracteristicaFijaComponent } from './caracteristica-fija/caracteristica-fija.component';
import { CaracteristicasPropiasComponent } from './caracteristicas-propias/caracteristicas-propias.component';
import { ListadoCaracteristicasComponent } from './caracteristica-fija/listado-caracteristicas/listado-caracteristicas.component';
import { ProdGuardService as guard} from './guard/prod-guard.service';
import { OpcionComponent } from './opcion/opcion.component';


const routes: Routes =[
{path:'login',component:LoginComponent},
{path:'nav',component:NavComponent},
{path:'dispositivos',component:OrdenadoresComponent,  canActivate: [guard], data: { expectedRol: ['admin']}},
{path:'caracteristicas-fijas',component:ListadoCaracteristicasComponent,  canActivate: [guard], data: { expectedRol: ['admin']}},
{path:'registro',component:RegistroComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
{path:'nuevo-dispositivo',component:NuevoDispositivoComponent,  canActivate: [guard], data: { expectedRol: ['admin']}},
{path:'caracteristicas',component:FullDispositivoComponent, canActivate: [guard], data: { expectedRol: ['admin']}},
{path:'nueva-caracteristica-global',component:CaracteristicaFijaComponent,  canActivate: [guard], data: { expectedRol: ['admin']}},
{path:'nueva-caracteristica-propia',component:CaracteristicasPropiasComponent,  canActivate: [guard], data: { expectedRol: ['admin']}},
{path:'nueva-opcion',component:OpcionComponent,  canActivate: [guard], data: { expectedRol: ['admin']}},
{path:'tipos',component:TiposComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
{path:'creartipos',component:CrearTipoComponent,  canActivate: [guard], data: { expectedRol: ['admin']}},
{path:'dispositivo/:id',component:QrComponenteComponent},
{path: '',redirectTo:'/login',pathMatch:'full'},
{path:'**',component:Page404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
