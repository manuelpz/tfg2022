import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearOrdenadoresComponent } from './crear-ordenadores/crear-ordenadores.component';
import { ImpresorasComponent } from './impresoras/impresoras.component';
import { NavComponent } from './nav/nav.component';
import { OrdenadoresComponent } from './ordenadores/ordenadores.component';
import { OtrosComponent } from './otros/otros.component';
import { Page404Component } from './page404/page404.component';
import { PantallasComponent } from './pantallas/pantallas.component';

const routes: Routes =[
{path:'nav',component:NavComponent},
{path:'ordenadores',component:OrdenadoresComponent},
{path:'pantallas',component:PantallasComponent},
{path:'impresoras',component:ImpresorasComponent},
{path:'nuevoPC',component:CrearOrdenadoresComponent},
{path:'otros',component:OtrosComponent},
{path: '',redirectTo:'/nav',pathMatch:'full'},
{path:'**',component:Page404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
