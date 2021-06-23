import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SignUpStepperComponent} from "./components/sign-up-stepper/sign-up-stepper.component";
import {LoginComponent} from "./components/login/login.component";
import {BgStepperDirective} from "./components/sign-up-stepper/bg-stepper.directive";
import {AppRoutingModel} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';



var firebaseConfig = {
  apiKey: "AIzaSyBgORjxBPYF3FJTKJtGreDBHbdgiNu_K8k",
  authDomain: "social-gaming-network-ce805.firebaseapp.com",
  projectId: "social-gaming-network-ce805",
  storageBucket: "social-gaming-network-ce805.appspot.com",
  messagingSenderId: "966497612047",
  appId: "1:966497612047:web:96e29942863045d4b24e7a",
  measurementId: "G-2RHYHWKDYF"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpStepperComponent,
    BgStepperDirective,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModel

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
