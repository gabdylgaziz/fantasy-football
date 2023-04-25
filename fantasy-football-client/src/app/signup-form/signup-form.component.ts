import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  sign: boolean;
  constructor() {
    this.sign = false;
  }

  nextstep(){
    this.sign = true;
  }

  prevstep(){
    this.sign = false;
  }

}