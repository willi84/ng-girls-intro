import { BodyComponent } from './../body/body.component';
import { HeadComponent } from './../head/head.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
enum MOUTH {
  left = 'M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,138  140,143  125,143  110,143 109,138 106,132 Z',
  middle = 'M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,149  125,149  116,149 109,142 106,132 Z',
  right = 'M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z',
}
enum SMILE {
  left = 'M125,138 C 140,138 143.5,132 143.5,132 143.5,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,138 125,138 Z',
  middle = 'M125,144 C 140,144 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,144 125,144 Z',
  right = 'M125,141 C 140,141 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,141 125,141 Z',
}
enum ARM {
  left_top_normal = 'M 118,178 C 64,206 49,145 86,115',
  left_top_blink = 'M 118,178 C 64,206 49,145 86,106',
  right_top_normal = 'M 132,178 C 186,206 201,145 164,115',
  right_top_blink = 'M 132,178 C 186,206 201,145 164,106',
  left_bottom = 'M 118,178 C 94,179 66,220 65,254',
  right_bottom = 'M 132,178 C 156,179 184,220 185,254',
}
// tslint:disable
enum HAND {
  left_top_normal = 'M 81,110 C 76,103 90,83 93,86 95,87 96,88 91,95 102,83 106,78 109,80 112,83 102,94 99,97 102,94 112,81 116,84 119,87 105,101 103,103 107,98 114,91 116,93 119,96 100,127 89,118',
  left_top_blink = 'M 81,103 C 76,96 90,76 93,79 95,80 96,81 91,88 102,76 106,71 109,73 112,76 102,87 99,90 102,87 112,74 116,77 119,80 105,94 103,96 107,91 114,84 116,86 119,89 100,120 89,111',
  right_top_normal = 'M 169,110 C 174,103 160,83 157,86 155,87 154,88 159,95 148,83 144,78 141,80 138,83 148,94 151,97 148,94 138,81 134,84 131,87 145,101 147,103 143,98 136,91 134,93 131,96 150,127 161,118',
  right_top_blink = 'M 169,103 C 174,96 160,76 157,79 155,80 154,81 159,88 148,76 144,71 141,73 138,76 148,87 151,90 148,87 138,74 134,77 131,80 145,94 147,96 143,91 136,84 134,86 131,89 150,120 161,111',
  left_bottom = 'M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278',
  right_bottom = 'M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278',
}
// tslint:enable
@Component({
  selector: 'wtm-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit {
  activeEmail: Boolean = false;
  @ViewChild('svg', { read: ElementRef }) svg: ElementRef;
  @ViewChild(HeadComponent) head: HeadComponent;
  @ViewChild(BodyComponent) body: BodyComponent;


  // logic for typing on the email field
  movingEyes = (e) => {
    this.svg.nativeElement.classList.add('arms-up');
    this.activeEmail = true;

    const movePos = e.target.value.length > 30 ? 13.33 : e.target.value.length / 2.15;
    this.head.eyeRight.nativeElement.setAttribute('cy', 112);
    this.head.eyeLeft.nativeElement.setAttribute('cy', 112);
    this.head.eyeRight.nativeElement.setAttribute('cx', 142 + movePos);
    this.head.eyeLeft.nativeElement.setAttribute('cx', 96 + movePos);

    if (e.target.value.length < 4) {
      this.head.eyebrowLeft.nativeElement.style.transform = 'translate(0, 0)';
      this.head.eyebrowRight.nativeElement.style.transform = 'translate(0, 0)';
      this.head.mouth.nativeElement.setAttribute('d', MOUTH.left);
      this.head.smile.nativeElement.setAttribute('d', SMILE.left);
    } else if (e.target.value.indexOf('@') > 0) {
      this.head.eyebrowLeft.nativeElement.style.transform = 'translate(0, -2px)';
      this.head.eyebrowRight.nativeElement.style.transform = 'translate(0, -2px)';
      this.head.mouth.nativeElement.setAttribute('d', MOUTH.middle);
      this.head.smile.nativeElement.setAttribute('d', SMILE.middle);
    } else {
      this.head.eyebrowLeft.nativeElement.style.transform = 'translate(0, -0.5px)';
      this.head.eyebrowRight.nativeElement.style.transform = 'translate(0, -0.5px)';
      this.head.mouth.nativeElement.setAttribute('d', MOUTH.right);
      this.head.smile.nativeElement.setAttribute('d', SMILE.right);
    }
  }

  //  reset the eyes and eyebrows to their original position after leaving a field
  resetEyesMouth = (e) => {
    this.head.eyeRight.nativeElement.setAttribute('cy', 107);
    this.head.eyeLeft.nativeElement.setAttribute('cy', 107);
    this.head.eyeRight.nativeElement.setAttribute('cx', 148);
    this.head.eyeLeft.nativeElement.setAttribute('cx', 102);
    this.head.eyebrowLeft.nativeElement.style.transform = 'translate(0, 0)';
    this.head.eyebrowRight.nativeElement.style.transform = 'translate(0, 0)';
    if (e.target.value.indexOf('@') < 0) {
      this.head.mouth.nativeElement.setAttribute('d', MOUTH.right);
      this.head.smile.nativeElement.setAttribute('d', SMILE.right);
    }
    if (e.target.value === '') {
      this.activeEmail = false;
    }
  }




  // password animation: move arms to cover eyes on focus, and return to original position on blur
  hideEyes = (e) => {

    this.svg.nativeElement.classList.add('arms-up');
    if (this.svg.nativeElement.classList.contains('looking')) {
      this.movingEyes(e);
      this.body.armLeft.nativeElement.setAttribute('d', ARM.left_top_blink);
      this.body.armRight.nativeElement.setAttribute('d', ARM.right_top_blink);
      this.body.handLeft.nativeElement.setAttribute('d', HAND.left_top_blink);
      this.body.handRight.nativeElement.setAttribute('d', HAND.right_top_blink);
    } else {
      this.body.armLeft.nativeElement.setAttribute('d', ARM.left_top_normal);
      this.body.armRight.nativeElement.setAttribute('d', ARM.right_top_normal);
      this.body.handLeft.nativeElement.setAttribute('d', HAND.left_top_normal);
      this.body.handRight.nativeElement.setAttribute('d', HAND.right_top_normal);
    }
  }


  showEyes = (e) => {
    this.svg.nativeElement.classList.remove('arms-up');
    this.resetEyesMouth(e);
    this.body.armLeft.nativeElement.setAttribute('d', ARM.left_bottom);
    this.body.armRight.nativeElement.setAttribute('d', ARM.right_bottom);
    this.body.handLeft.nativeElement.setAttribute('d', HAND.left_bottom);
    this.body.handRight.nativeElement.setAttribute('d', HAND.right_bottom);
  }
  blinkEyes = (e) => {
    this.svg.nativeElement.classList.toggle('looking');
  }

  constructor() { }

  ngOnInit() {
  }

}
