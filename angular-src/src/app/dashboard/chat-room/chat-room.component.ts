import { Component, OnInit,OnChanges, OnDestroy, Input, SimpleChanges } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnChanges, OnDestroy {

  @Input() chatname: string;
  messages: any[] = [{message:'Hi',outgoing:false},{message:'Hello',outgoing:true}];
  connection;

  constructor(private authService: AuthService, private chatService: ChatService) { }

   ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  onMessageEntered(messageData: {message: string, outgoing: boolean}) {
    this.messages.push(messageData);
    console.log('added to list' + messageData.message);
  }

ngOnChanges(changes: SimpleChanges): void {
   /* this.authService.getChat(this.chatname).subscribe( chat => {
      this.messages = chat.messages;
    }); */
  }

ngOnDestroy() {
  this.connection.unsubscribe();
}

}
