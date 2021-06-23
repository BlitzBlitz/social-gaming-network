import {AngularFireAuth} from "@angular/fire/auth";
import {Injectable} from "@angular/core";
import firebase from "firebase";
import {User} from "../models/user.model";


@Injectable({providedIn: "root"})
export class AuthService{
  loggedIn = false;
  user: User;
  constructor(private auth: AngularFireAuth) {
  }

  signUp(user: User): Promise<firebase.auth.UserCredential>{
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }


  login(user: User): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }
}
