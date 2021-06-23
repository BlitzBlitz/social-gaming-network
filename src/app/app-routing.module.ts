import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignUpStepperComponent} from "./components/sign-up-stepper/sign-up-stepper.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";

const appRoutes: Routes = [
  {path: '', component: SignUpStepperComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModel {
}
