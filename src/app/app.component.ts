import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService} from './shared/authentication.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(
    private router : Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public AuthenticationService: AuthenticationService 
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('login');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout() {
    this.AuthenticationService.signOut()
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : " Favorieten",
        url   : "/favorieten",
        icon  : "md-star-outline"
      },
      {
        title : "Mijn recepten",
        url   : "/mijnrecepten",
        icon  : "md-list-box"
      },
      {
        title : "Mijn profiel",
        url   : "/mijnprofiel",
        icon  : "md-person"
      }
    ]
  }



}
