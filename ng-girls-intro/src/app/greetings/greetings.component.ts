import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wtm-greetings',
  template: `
    <p class="title" id="greet">{{text}}</p>
    ` ,
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {
  @Input() text: String;

  constructor() { }

  ngOnInit() {
  }

}
