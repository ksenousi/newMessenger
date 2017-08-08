import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  @Input() chatName: string;

  messages = [{message:'Hi',outgoing:false},{message:'Hello',outgoing:true}];
  constructor() { }

  ngOnInit() {
  }

  onMessageEntered(messageData: {message: string, outgoing: boolean}) {
    this.messages.push(messageData);
    console.log('added to list' + messageData.message);
  }
}
