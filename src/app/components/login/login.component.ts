import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";
import {loggedIn} from "@angular/fire/auth-guard";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onLogin() {
    let user = new User(this.loginForm.controls.email.value, this.loginForm.controls.password.value);
    this.authService.login(user).then(response => {
      console.log(response);
      this.authService.loggedIn = true;
    }).catch(error =>{
      switch (error.code) {
        case 'auth/user-not-found':
          this.loginForm.controls.email.setErrors({'userNotFound': true});
          break;
        case 'auth/wrong-password':
          this.loginForm.controls.password.setErrors({'wrongPass': true});
          break;
      }
    });
  }
}
