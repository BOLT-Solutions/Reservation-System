import { HttpClientModule } from '@angular/common/http'; // Http client module import
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // FormGroup and Validation module import
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule, routes } from './app-routing.module'; // Default Angular Routing module
import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FormsModule,
    RouterModule,
    LayoutModule, // Layout Module imported
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule, // Slick Carousel import
    RouterModule.forRoot(routes, { useHash: true }),
    SocialLoginModule
  ],

  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '926693855353-ph0i56aiitoq5gml5cgnnkdrrhoeaihb.apps.googleusercontent.com'
            )
          },
          //{
          //  id: FacebookLoginProvider.PROVIDER_ID,
          //  provider: new FacebookLoginProvider('clientId')
          //}
        ]
      } as SocialAuthServiceConfig,
    }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
