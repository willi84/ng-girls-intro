import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// tslint:disable
@Component({
  selector: '[wtm-body]',
  template: `
  <svg:path fill="#8665c2"
    d="M 132,170 C 146,170 154,200 154,200 154,200 158,245 158,245 158,245 92,245 92,245 92,245 96,200 96,200 96,200 104,170 118,170 118,170 125,172 125,172 125,172 132,170 132,170 Z"></svg:path>
  <svg:path #armLeft id="arm-left" class="arm" stroke="#8665c2" fill="none" stroke-width="14"
    d="M 118,178 C 94,179 66,220 65,254" ></svg:path>
  <svg:path #armRight id="arm-right" class="arm" stroke="#8665c2" fill="none" stroke-width="14"
    d="M 132,178 C 156,179 184,220 185,254"></svg:path>
  <svg:path fill="white" d="M 117,166 C 117,166 125,172 125,172 125,182 115,182 109,170 Z"></svg:path>
  <svg:path fill="white" d="M 133,166 C 133,166 125,172 125,172 125,182 135,182 141,170 Z" ></svg:path>
  <svg:circle cx="125" cy="188" r="4" fill="#5a487b"></svg:circle>
  <svg:circle cx="125" cy="202" r="4" fill="#5a487b"></svg:circle>
  <svg:circle cx="125" cy="216" r="4" fill="#5a487b"></svg:circle>
  <svg:circle cx="125" cy="230" r="4" fill="#5a487b"></svg:circle>
  <svg:circle cx="125" cy="244" r="4" fill="#5a487b"></svg:circle>
  <svg:path #handLeft stroke="#daa37f" stroke-width="1" class="skin hand" id="hand-left"
    d="M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278" ></svg:path>
  <svg:path #handRight stroke="#daa37f" stroke-width="1" class="skin hand" id="hand-right"
    d="M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278"></svg:path>
  `,
  styleUrls: ['./body.component.css']
})
// tslint:enable
export class BodyComponent implements OnInit {

  @ViewChild('armLeft', { read: ElementRef }) armLeft: ElementRef;
  @ViewChild('armRight', { read: ElementRef }) armRight: ElementRef;
  @ViewChild('handLeft', { read: ElementRef }) handLeft: ElementRef;
  @ViewChild('handRight', { read: ElementRef }) handRight: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
