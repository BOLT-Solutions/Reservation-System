import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/shared-services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthenticationService) { }

  ngOnInit(): void {
    this.Logout();
  }

  Logout() {
    //this.AuthService.removeToken();
    //this.router.navigate(["auth"]);
  }
}
