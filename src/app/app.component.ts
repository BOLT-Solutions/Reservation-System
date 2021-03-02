import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import { UserToken } from './models/response/user-token';
import { AuthenticationService } from './services/shared-services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-structure';

  logged = false;
  model: UserToken = null;
  subscription: Subscription;
  webApiUrl: string = `${environment.apiBaseUrl}`;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    //get cuu
    this.subscription = this.authService.currentUser.subscribe(data => {
      if (data) {
        this.model = data;
        this.logged = true;
      }
      else {
        this.model = null;
        this.logged = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
