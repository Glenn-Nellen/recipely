import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page{

  public myForm: FormGroup;
  private stepCount: number = 1;

  constructor(private router: Router, formBuilder: FormBuilder){

    this.myForm = formBuilder.group({
      user: ['', Validators.required]
    });
  }
  toSecondPage()
  {
    this.router.navigate(['stap2']);
  }

  
  addControl(){
    this.stepCount++;
    this.myForm.addControl('step' + this.stepCount, new FormControl('', Validators.required));
  }

  removeControl(control){
    this.myForm.removeControl(control.key);
  }

}
