import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { OrdenadoresComponent } from './ordenadores/ordenadores.component';

import { Page404Component } from './page404/page404.component';
import { QrComponenteComponent } from './qr-componente/qr-componente.component';


const routes: Routes =[ {path:'nav',component:NavComponent},
{path:'ordenadores',component:OrdenadoresComponent},
{path:'dispositivo/:id',component:QrComponenteComponent},
{path: '',redirectTo:'/nav',pathMatch:'full'},
{path:'**',component:Page404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
