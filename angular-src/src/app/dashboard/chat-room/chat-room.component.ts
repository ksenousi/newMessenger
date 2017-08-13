import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnChanges{

  @ViewChild('messageScroller') private messageScroller: ElementRef;
  @Input() chatroomData:{ chatname: string, messages: any[]};

  constructor(private chatService: ChatService) { }

   ngOnInit(){
   } 

  onMessageEntered(messageData) {
    this.chatroomData.messages.push(messageData);
    this.scrollToBottom();
    console.log('added to list' + messageData.message);
    this.chatService.sendMessage({messageData, 'chatname' :this.chatroomData.chatname});
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("chatroom: "+JSON.stringify(this.chatroomData));
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
        this.messageScroller.nativeElement.scrollTop = this.messageScroller.nativeElement.scrollHeight;
    } catch(err) { }                 
}

}
