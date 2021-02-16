import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { P404Component } from './modules/error/404.component';
import { P500Component } from './modules/error/500.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  //{
  //  path: 'logout',
  //  component: LogoutComponent,
  //  data: {
  //    title: 'logout'
  //  }
  //},
  {
    path: '',
    component: LayoutComponent,
    data: {
    }
  },
  {
    path: 'auth', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  { path: '**', component: P404Component }
];



// Exported Routes for app-module router imports
//export const routes: Routes = [

//  { path: '', loadChildren: () => import('./modules/authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule) }, // Layout module lazy loaded

//  //{ path: '', redirectTo: '', pathMatch: 'full' }
//  // Redirect to default path on initialize, app routing module will redirect to layout routing module
//  // In case of no layout module present, routing to components shall happen directly from here.

//]; 

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
