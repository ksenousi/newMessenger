import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  chatroomData = { chatname: '', messages: [], showSpinner: true };
  chatlistData = { chatlist: [{ chat: '', numUnseen: 0 }], selectedChat: '' };
  connection: any;

  constructor(private authService: AuthService, private chatService: ChatService) { }

  ngOnInit() {
    this.authService.getChatlist().subscribe(chatlist => {
      this.chatlistData.chatlist = chatlist;
      this.onChatSelected(this.chatlistData.chatlist[0]);
    },
      err => {
        console.log(err);
        return false;
      });


    this.connection = this.chatService.getMessages().subscribe((incomingMessage: any) => {
      let chatname = incomingMessage.chatname;
      let message = incomingMessage.messageData;

      if (chatname === this.chatroomData.chatname) {
        message.seen = true;
        this.chatroomData.messages.push(message);
        this.chatroomData = Object.assign({}, this.chatroomData);
      } else {
        let index = this.chatlistData.chatlist.findIndex(chatItem => chatItem.chat === chatname);
        this.chatlistData.chatlist[index].numUnseen += 1;
      }
    });

  }

  onChatSelected(chatItem) {
    this.chatlistData.selectedChat = chatItem.chat;
    this.chatroomData.chatname = chatItem.chat;
    chatItem.numUnseen = 0;
    this.chatroomData.showSpinner = true;

    this.setMessagesSeen(chatItem);
    if (typeof this.chatroomData.chatname !== 'undefined') {
      this.authService.getChat(this.chatroomData.chatname).subscribe(chat => {
        this.chatroomData.messages = chat.messages;
        this.chatroomData.showSpinner = false;
        // reset object for changes to be noticed
        this.chatroomData = Object.assign({}, this.chatroomData);
      });
    }
  }

  setMessagesSeen(chat) {
    chat.messages.map(message => message.seen = true);
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
