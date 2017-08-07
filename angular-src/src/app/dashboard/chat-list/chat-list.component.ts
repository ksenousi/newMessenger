import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  chats = [1, 1, 1];
  
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

}
