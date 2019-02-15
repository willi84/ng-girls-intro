import { WomanComponent } from './woman/woman.component';
import { Component,  ViewChild } from '@angular/core';
import { PasswordComponent } from './password/password.component';

@Component({
  selector: 'wtm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Привіт! Мене звати Аня.';
  email = '';
  password = '';


  @ViewChild(WomanComponent) woman: WomanComponent;
  @ViewChild(PasswordComponent) showPassword: PasswordComponent;




  // logic for typing on the email field
  movingEyes = (e) => {
    this.email = e.target.value;
    if (this.woman) { this.woman.movingEyes(e); }
  }

  //  reset the eyes and eyebrows to their original position after leaving a field
  resetEyesMouth = (e) => {
    this.email = e.target.value;
    if (this.woman) { this.woman.resetEyesMouth(e); }
  }

  // password animation: move arms to cover eyes on focus, and return to original position on blur
  focusPassword = (e) => {
    this.password = e.target.value;
    if (this.woman) { this.woman.hideEyes(e); }
  }

  showingPassword = (e) => {
    if (this.showPassword.showPassword.nativeElement.classList.contains('active')) {
      this.movingEyes(e);
    }
  }
  blurPassword = (e) => {
    this.password = e.target.value;
    if (this.woman) { this.woman.showEyes(e); }
  }

  activateShowPassword = (e) => {
    if (this.woman) { this.woman.blinkEyes(e); }
  }
  sendForm = (e) => {
    alert(`email: ${this.email} and password: ${this.password}`);
  }

}
