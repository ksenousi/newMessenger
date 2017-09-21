import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChanges} from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnChanges {

  @ViewChild('messageScroller') private messageScroller;
  @Input() chatroomData: { chatname: string, messages: any[], showSpinner: boolean };

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  onMessageEntered(messageData) {
    this.chatroomData.messages.push(messageData);
    this.scrollToBottom();
    this.chatService.sendMessage({ messageData, 'chatname': this.chatroomData.chatname });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.scrollToBottom();
    console.log('things changed');
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.messageScroller.nativeElement.scrollTop = this.messageScroller.nativeElement.scrollHeight;
      } catch (err) { }
    });
  }
}
