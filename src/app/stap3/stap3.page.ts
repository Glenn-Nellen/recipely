import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stap3',
  templateUrl: './stap3.page.html',
  styleUrls: ['./stap3.page.scss'],
})
export class Stap3Page {
  toFourthPage()
  {
    this.router.navigate(['stap4']);
  }

  public myForm: FormGroup;
  private stepCount: number = 1;

  constructor(private router: Router, formBuilder: FormBuilder){

    this.myForm = formBuilder.group({
      user: ['', Validators.required]
    });

  }

  addControl(){
    this.stepCount++;
    this.myForm.addControl('step' + this.stepCount, new FormControl('', Validators.required));
  }

  removeControl(control){
    this.myForm.removeControl(control.key);
  }

}