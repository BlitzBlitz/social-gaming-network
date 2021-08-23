import {Injectable} from "@angular/core";
import {Message} from "ng-chat";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

@Injectable({providedIn:'root'})
export class UtilService{
  convertToMessage(dbMessageFormat): Message{
    let message = {...dbMessageFormat};
    delete message.dateSent;
    message.dateSent = new Date((dbMessageFormat.dateSent as Timestamp).seconds * 1000);
    return message;
  }
}
