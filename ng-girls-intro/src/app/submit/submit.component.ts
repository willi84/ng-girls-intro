import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wtm-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  @Output() submit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  sendForm(e) {
    e.preventDefault();
    console.log(e);
    this.submit.emit(e);
  }

}
