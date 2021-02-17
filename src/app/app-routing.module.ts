import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './modules/authentication/logout/logout.component';
import { P404Component } from './modules/error/404.component';
import { P500Component } from './modules/error/500.component';

// Exported Routes for app-module router imports
export const routes: Routes = [

  { path: '404',component: P404Component,},
  { path: '500', component: P500Component,},
  { path: 'logout', component: LogoutComponent, },
  { path: 'layout', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule),},
  { path: 'auth', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule), },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: P404Component }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
