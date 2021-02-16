import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { P404Component } from './modules/error/404.component';
import { P500Component } from './modules/error/500.component';
import { LogoutComponent } from './modules/authentication/logout/logout.component';

// Exported Routes for app-module router imports
export const routes: Routes = [

  { path: '', redirectTo: 'auth', pathMatch: 'full',},
  { path: '404',component: P404Component,},
  { path: '500', component: P500Component,},
  { path: 'logout',component: LogoutComponent,},
  { path: '',component: LayoutComponent,},
  { path: 'auth', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule),},
  { path: '**', component: P404Component }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
