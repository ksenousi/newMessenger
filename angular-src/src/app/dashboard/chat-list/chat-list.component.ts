import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  
  @Output('chatSelected') chatSelected = new EventEmitter<string>();

  chats: string[];
  
  constructor(private authService: AuthService) {

    this.authService.getProfile().subscribe(profile => {
      this.chats = profile.user.contacts;
      console.log(this.chats);
     },
     err => {
      console.log(err);
      return false;
    });

  }

  ngOnInit() {
  }

  onChatSelected(chatname: string) {
    this.chatSelected.emit(chatname);
  }
}
