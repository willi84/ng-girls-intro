import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: '[wtm-head]',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @ViewChild('mouth', { read: ElementRef }) mouth: ElementRef;
  @ViewChild('smile', { read: ElementRef }) smile: ElementRef;
  @ViewChild('eyeLeft', { read: ElementRef }) eyeLeft: ElementRef;
  @ViewChild('eyeRight', { read: ElementRef }) eyeRight: ElementRef;
  @ViewChild('eyebrowLeft', { read: ElementRef }) eyebrowLeft: ElementRef;
  @ViewChild('eyebrowRight', { read: ElementRef }) eyebrowRight: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
