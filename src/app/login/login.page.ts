import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'], 
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public modalController: ModalController) {}
  toRegisterPage() {
    this.router.navigate(["register"]);
  }

  toLoginPage() {
    this.router.navigate(["inloggen"]);
  }

  ngOnInit() {
  }

}
