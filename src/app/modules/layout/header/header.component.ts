import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  initials
  constructor() { }

  ngOnInit(): void {
    let userName = 'yasmin ghazy'
    this.initials = userName.split(" ").map(n => n[0]).join("").toUpperCase()
  }

}
