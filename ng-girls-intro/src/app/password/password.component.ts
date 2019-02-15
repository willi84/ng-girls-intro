import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'wtm-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Output() focus = new EventEmitter<string>();
  @Output() blur = new EventEmitter<string>();
  @Output() click = new EventEmitter<string>();
  @Output() input = new EventEmitter<string>();
  @ViewChild('password', { read: ElementRef }) password: ElementRef;
  @ViewChild('showPasswordContainer', { read: ElementRef }) showPassword: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  // password animation: move arms to cover eyes on focus, and return to original position on blur
  focusPassword = (e) => {
   this.focus.emit(e);
  }

  showingPassword = (e) => {
    if (this.showPassword.nativeElement.classList.contains('active')) {
      this.input.emit(e);
    }
  }
  blurPassword = (e) => {
    this.blur.emit(e);
  }

  activateShowPassword = (e) => {
    this.showPassword.nativeElement.classList.toggle('active');
    this.click.emit(e);
    this.password.nativeElement.type = this.showPassword.nativeElement.classList.contains('active') ? 'text' : 'password';
  }

}
