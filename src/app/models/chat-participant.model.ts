import {ChatParticipantStatus, ChatParticipantType, IChatParticipant} from "ng-chat";
import {DocumentReference} from "@angular/fire/firestore";

export class ChatParticipantModel implements IChatParticipant {
  id: any;
  displayName: string;
  avatar: string | null;
  participantType: ChatParticipantType;
  status: ChatParticipantStatus;
  friends: DocumentReference[];


}
