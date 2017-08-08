import { Component, OnInit,OnChanges, Input, SimpleChanges } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnChanges {

  @Input() chatname: string;
  messages = [{message:'Hi',outgoing:false},{message:'Hello',outgoing:true}];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onMessageEntered(messageData: {message: string, outgoing: boolean}) {
    this.messages.push(messageData);
    console.log('added to list' + messageData.message);
  }

ngOnChanges(changes: SimpleChanges): void {
    this.authService.getChat(this.chatname).subscribe( chat => {
      this.messages = chat.messages;
    });

  }
}
