import {AngularFirestore, DocumentReference, DocumentSnapshot} from "@angular/fire/firestore";
import {IChatParticipant, Message, User} from "ng-chat";
import {AngularFireDatabase} from "@angular/fire/database";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {ChatParticipantModel} from "../models/chat-participant.model";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({providedIn: "root"})
export class DataService {
  constructor(private db: AngularFireDatabase, private authService: AuthService, private fireStore: AngularFirestore) {
  }

  getMessages(destinataryId: any) {
    return undefined;
  }

  getFriends(): Observable<IChatParticipant[]> {
    const user ='klement';// this.authService.user;
    let friendObsrv: Observable<IChatParticipant[]>;
    if(user){
      const userPath = 'users/' + 'klement';//user.getUserName();
      friendObsrv = this.fireStore.doc(userPath).valueChanges().pipe(map( (userData: ChatParticipantModel) => {

        //collect friends as you are in noSQL :/

        let friends: IChatParticipant[] = [];
        let friendsRef = userData.friends;
        friendsRef.forEach(friendRef => {
          this.fireStore.doc(friendRef).get().subscribe((friendData:DocumentSnapshot<IChatParticipant>)  =>{
            friends.push(friendData.data());//push friendData to output
          });
        });
        return friends;
      }));
    }
    return friendObsrv;
  }

  getUnseenMessage(user:string, friend:string){
    return this.fireStore.collection('messages',
        ref => ref
          .where("fromId","==",friend)
          .where("toId", "==",user))
      .snapshotChanges().pipe(map(data=>{
        return data.length;
      }));

  }

  saveMessage(message: Message) {
    const chatRooms = this.db.object('chatRooms');

  }
}
