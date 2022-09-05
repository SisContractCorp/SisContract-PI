import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _route : Router) {
  }

  gotoCadastrar(){
    this._route.navigate(["/cadastrar"]);
  }
  
  gotoOfflineMode(){
    this._route.navigate(["/offlineMode"]);
  }
}
