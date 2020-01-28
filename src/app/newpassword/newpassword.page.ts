import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.page.html',
  styleUrls: ['./newpassword.page.scss'],
})
export class NewpasswordPage implements OnInit {

  public forgotEmail: string
  constructor(public afAuth: AngularFireAuth, public authenticationService: AuthenticationService, private router: Router, public modalController: ModalController) { }
  ngOnInit() {
  }
  resetPassword() {
    this.authenticationService.resetPassword(this.forgotEmail)
  }


}
