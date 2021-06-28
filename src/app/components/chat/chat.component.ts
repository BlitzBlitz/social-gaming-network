import { Component, OnInit } from '@angular/core';
import {ChatAdapter2Service} from "../../services/chat-adapter2.service";
import {DataService} from "../../services/data.service";
import {combineLatest, of} from "rxjs";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userId = 1;

  constructor(public adapter: ChatAdapter2Service, private dataService: DataService) { }

  ngOnInit(): void {

  }

}
