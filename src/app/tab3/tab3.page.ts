import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import * as uuid from "uuid";
import { AlertController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthenticationService } from "../shared/authentication.service";

//import { firestore } from 'firebase';

export interface Image {
  id: string;
  image: string;
}

@Component({
  selector: "app-tab3",
  templateUrl: "./tab3.page.html",
  styleUrls: ["./tab3.page.scss"]
})
export class Tab3Page {
  public steps: any[] = [
    {
      step: ""
    }
  ];
  url: any;
  newImage: Image = {
    id: this.afs.createId(),
    image: ""
  };
  ingredient = new Array();
  loading: boolean = false;
  stap1: boolean = true;
  stap2: boolean = false;
  stap3: boolean = false;
  stap4: boolean = false;
  public myForm: FormGroup;

  validations_form: FormGroup;
  errorMessage: string = "";
  event: any;

  user = this.afAuth.auth.currentUser.email;
  naam = "";
  category = "";
  ingredients: any;
  mealTime = "";
  people = "";
  prepTime = "";
  videoLink = "";
  id = uuid.v4();
  constructor(
    public afAuth: AngularFireAuth,
    public authenticationService: AuthenticationService,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    public alertController: AlertController,
    private router: Router,
    private formBuilder: FormBuilder,
    private db: AngularFirestore
  ) {
    this.myForm = formBuilder.group({
      user: new FormControl("", Validators.required)
    });
  }
  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      naam: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^.[a-zA-Z]+.[a-zA -Z]+$")
        ])
      ),
      people: new FormControl("", Validators.compose([Validators.required])),
      prepTime: new FormControl("", Validators.compose([Validators.required])),
      categorie: new FormControl(),
      mealTime: new FormControl(),
      video: new FormControl(),
      step: new FormControl()
    });
  }
  saveEvent(event) {
    this.event = event.target.files[0];
  }
  uploadRecipe() {
    this.loading = true;
    var reader = new FileReader();

    reader.readAsDataURL(this.event);
    // For Preview Of Image
    (reader.onload = (e: any) => {
      // called once readAsDataURL is completed
      this.url = e.target.result;

      // For Uploading Image To Firebase
      const fileraw = this.event;
      console.log(fileraw);
      const filePath = "/Image/" + "Image" + uuid.v4();
      const result = this.SaveImageRef(filePath, fileraw);
      const ref = result.ref;
      result.task.then(a => {
        ref.getDownloadURL().subscribe(a => {
          console.log(a);
          this.newImage.image = a;
          this.loading = false;
          this.db.collection("recipe").add({
            category: this.validations_form.get("categorie").value,
            name: this.validations_form.get("naam").value,
            ingredient: this.ingredient.join(", "),
            mealTime: this.validations_form.get("mealTime").value,
            people: this.validations_form.get("people").value,
            preptime: this.validations_form.get("prepTime").value,
            steps: this.steps,
            video: this.validations_form.get("video").value,
            id: this.id,
            image: this.newImage.image,
            user: this.user
          });
        });
      });
    }),
      error => {
        alert("Error");
      };
  }

  SaveImageRef(filePath, file) {
    return {
      task: this.storage.upload(filePath, file),
      ref: this.storage.ref(filePath)
    };
  }

  validation_messages = {
    naam: [
      { type: "required", message: "Naam is verplicht." },
      { type: "pattern", message: "Voer een geldige naam in." }
    ],
    personen: [
      { type: "required", message: "Aantal personen is verplicht" },
      { type: "pattern", message: "U kunt voor maximaal 50 personen kiezen." }
    ],
    minuten: [
      { type: "required", message: "Aantal minuten is verplicht" },
      { type: "pattern", message: "U kunt voor maximaal 30 minuten kiezen" }
    ]
  };

  // Function for uploading recipe
  async uploadAlert() {
    console.log(this.ingredient);
    console.log(this.ingredient.join(", "));
    const alert = await this.alertController.create({
      header: "Recept toevoegen",
      message: "Controleer eerst of alle velden correct zijn ingevuld",
      buttons: [
        {
          text: "Annuleer",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: Annuleer");
          }
        },
        {
          text: "Bevestig recept",
          handler: () => {
            console.log("Bevestig recept");
            this.uploadRecipe();
            this.uploadDone(); // Zorgt ervoor dat je een notificatie krijgt als je een recept hebt aangemaakt.
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  // Notification when recipe is created
  async uploadDone() {
    const alert = await this.alertController.create({
      header: "Recept",
      message: "Recept is aangemaakt",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.router.navigate(["tabs/tab2"]);
            this.validations_form.reset();
            this.steps = [
              {
                step: ""
              }
            ];
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  // Verwijderd de inputs in het forumulier
  clearInputs() {
    this.validations_form.reset();
    this.steps = [
      {
        step: ""
      }
    ];
  }

  addSteps() {
    this.steps.push({
      step: ""
    });
  }

  removeSteps(i: number) {
    this.steps.splice(i, 1);
  }

  logValue() {
    console.log(this.steps);
  }

  // Step system
  back1() {
    this.stap1 = true;
    this.stap2 = false;
  }
  back2() {
    this.stap2 = true;
    this.stap3 = false;
  }
  back3() {
    this.stap3 = true;
    this.stap4 = false;
  }
  Stap2() {
    this.stap2 = true;
    this.stap1 = false;
  }
  Stap3() {
    this.stap3 = true;
    this.stap2 = false;
  }
  Stap4() {
    this.stap4 = true;
    this.stap3 = false;
  }
}
