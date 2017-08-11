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
  messages: any[];
  connection;

  constructor(private authService: AuthService, private chatService: ChatService) { }

   ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe((incomingMessage:any) => {
      console.log("message received"+JSON.stringify(incomingMessage));
      var chatname = incomingMessage.chatname;
      var message = incomingMessage.messageData;
      console.log("chatname: "+chatname);
      console.log("message:  "+message);
      if(chatname == this.chatname){
        this.messages.push(message);
      }
    })
  }

  onMessageEntered(messageData) {
    this.messages.push(messageData);
    console.log('added to list' + messageData.message);
    this.chatService.sendMessage({messageData, 'chatname' :this.chatname});
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("chatname: "+this.chatname);
      if(typeof this.chatname != 'undefined'){
        this.authService.getChat(this.chatname).subscribe( chat => {
        this.messages = chat.messages;
        }); 
      }
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
