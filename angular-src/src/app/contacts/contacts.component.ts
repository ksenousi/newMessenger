import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  searchCriteria: string;
  results = [];

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService) {}

  ngOnInit() {
  }

  searchContact(){
    this.results = [];
    this.authService.searchUsers(this.searchCriteria).subscribe( users => {

      if(users.error == 404){
        this.flashMessage.show('User not found', {cssClass: 'alert-danger', timeout: 3000});
        return;
      }

      for(var i=0;i< users.length;i++){
        this.results.push(users[i].username);
      }
    });
  }

}
