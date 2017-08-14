import { Component, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import {ChatService} from '../services/chat.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  chatroomData= { chatname: '', messages: [] };
  chatlistData = {chatlist:[{ chat: '' , badge: 0}], selectedChat: '' };
  connection: any;

  constructor(private authService: AuthService, private chatService:ChatService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.chatlistData.chatlist = profile.user.contacts.map( chatItem => {return {chat: chatItem, badge:0}});
      this.onChatSelected(this.chatlistData.chatlist[0]);
    },
    err => {
      console.log(err);
      return false;
    });


   this.connection = this.chatService.getMessages().subscribe((incomingMessage:any) => {
      var chatname = incomingMessage.chatname;
      var message = incomingMessage.messageData;
      if(chatname == this.chatroomData.chatname){
        this.chatroomData.messages.push(message);
        this.chatroomData = Object.assign({},this.chatroomData);
      } else {
        let index = this.chatlistData.chatlist.findIndex(chatItem => chatItem.chat == chatname);
        this.chatlistData.chatlist[index].badge +=1 ;
      }
    });

  }

  onChatSelected(chatItem) {
   this.chatlistData.selectedChat = chatItem.chat;
   this.chatroomData.chatname =  chatItem.chat;
   chatItem.badge = 0;

      if(typeof this.chatroomData.chatname != 'undefined'){
        this.authService.getChat(this.chatroomData.chatname).subscribe( chat => {
        this.chatroomData.messages = chat.messages;
        this.chatroomData = Object.assign({}, this.chatroomData);
        }); 
      }

  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }



}
