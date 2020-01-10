import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { firebase } from 'firebase';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  user = firebase.auth().currentUser
  constructor(public afAuth: AngularFireAuth) { 
    console.log(this.user.email)
  }
  
  ngOnInit() {
  }

}
