import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthenticationService } from "../shared/authentication.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import * as firebase from "firebase";

@Component({
  selector: "app-newpassword",
  templateUrl: "./newpassword.page.html",
  styleUrls: ["./newpassword.page.scss"]
})
export class NewpasswordPage implements OnInit {
  public forgotEmail: string;
  public checkEmail = false;
  public errorMessage: string;
  public email: string;
  constructor(
    public alertController: AlertController,
    public afAuth: AngularFireAuth,
    public authenticationService: AuthenticationService,
    private router: Router,
    public modalController: ModalController
  ) {}
  ngOnInit() {}
  resetPassword() {
    var auth = firebase.auth();
    return auth
      .sendPasswordResetEmail(this.email)
      .then(res => {
        (this.checkEmail = true), (this.errorMessage = "Success!");
      })
      .catch(error => {
        (this.checkEmail = false), (this.errorMessage = error);
      });
  }

  validation_messages = {
    email: [
      { type: "required", message: "Email is verplicht." },
      { type: "pattern", message: "Voer een geldig emailadres in." }
    ]
  };

  async SendPassword() {
    this.resetPassword();
    if (this.checkEmail) {
      const alert = await this.alertController.create({
        header: "Notificatie",
        message: "Mail gestuurd",
        buttons: [
          {
            text: "Ok",
            handler: () => {
              console.log("Sent email");
            }
          }
        ]
      });

      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);
    } else {
      const alert = await this.alertController.create({
        header: "Notificatie",
        message: "Deze email is niet geldig of is niet bekend in ons systeem.",
        buttons: ["OK"]
      });

      await alert.present();
      let result = await alert.onDidDismiss();
      console.log(result);
    }
  }

  async uploadDone() {
    const alert = await this.alertController.create({
      header: "Notificatie",
      message: "Email verstuurd",
      buttons: ["OK"]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
