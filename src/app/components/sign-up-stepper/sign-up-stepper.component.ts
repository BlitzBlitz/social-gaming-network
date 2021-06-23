import {Component, OnInit, ViewChild} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";
import {MatStepper} from "@angular/material/stepper";




@Component({
  selector: 'app-sign-up-stepper',
  templateUrl: './sign-up-stepper.component.html',
  styleUrls: ['./sign-up-stepper.component.css']
})



export class SignUpStepperComponent implements OnInit {

  signUpForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  passMatcher = new MyErrorStatePassMatcher();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null,
          [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$')]),
        'checkPassword': new FormControl(null, [Validators.required])
    },{validators: this.checkPasswords});


  }

  checkPasswords (control: AbstractControl): {[key: string]: any} | null  {
    if (control.get('password').value !== control.get('checkPassword').value) {
      return { 'checkPasswords': true };
    }
    return null;
  }

  //TODO
  onSubmit(stepper: MatStepper) {
    console.log("erlla");
    let user = new User(this.signUpForm.controls.email.value, this.signUpForm.controls.password.value );
    this.authService.signUp(user).then(response => {
      this.signUpForm.reset();
      stepper.reset();
    }).catch(error => {
      switch (error.code) {
        case 'auth/email-already-in-use':
        case 'auth/invalid-email':
          this.goBackSteps(3, stepper);
          this.signUpForm.controls.email.setErrors({'emailExist': true});
          break;
        case 'auth/weak-password':
          this.goBackSteps(2, stepper);
          break;
      }
    });
  }

  goBackSteps(steps: number, stepper: MatStepper): void{
    for(let i = 0; i < steps; i++){
      stepper.previous();
    }
  }
}




export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export class MyErrorStatePassMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    if(!form.valid && (control.dirty || control.touched)){
      return true;
    }
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
