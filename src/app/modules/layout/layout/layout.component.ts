import { Component, OnInit } from '@angular/core';
import { LanguageHelper } from '../../../services/utilities/langHelper';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public LanguageHelper: LanguageHelper) {
    this.LanguageHelper.ngOnInit();
  }

  ngOnInit(): void {
  }

}
