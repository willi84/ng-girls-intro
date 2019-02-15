import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WomanComponent } from './woman/woman.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    WomanComponent,
    HeadComponent,
    BodyComponent,
    EmailComponent,
    PasswordComponent,
    GreetingsComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
