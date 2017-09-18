import { Component, OnInit, Output, Input, AfterViewInit, EventEmitter} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Output('chatSelected') chatSelected = new EventEmitter<string>();
  @Input() chatlistData: any;

  constructor() {
  }

  ngOnInit() {
  }

  onChatSelected(chatname: string) {
    this.chatSelected.emit(chatname);
  }
}
