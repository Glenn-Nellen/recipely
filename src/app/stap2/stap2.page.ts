import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stap2',
  templateUrl: './stap2.page.html',
  styleUrls: ['./stap2.page.scss'],
})
export class Stap2Page {
  constructor(private router: Router){}
  toThirdPage() {
    this.router.navigate(["stap3"]);
  }

}
