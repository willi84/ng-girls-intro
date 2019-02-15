import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wtm-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Output() focus = new EventEmitter<string>();
  @Output() keyup = new EventEmitter<string>();
  @Output() blur = new EventEmitter<string>();

  activeEmail: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  // logic for typing on the email field
  movingEyes = (e) => {
    this.focus.emit(e);
    this.activeEmail = true;
  }

  //  reset the eyes and eyebrows to their original position after leaving a field
  resetEyesMouth = (e) => {
    this.blur.emit(e);
    if (e.target.value === '') {
      this.activeEmail = false;
    }
  }
}
