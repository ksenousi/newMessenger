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
  contacts = [];

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe( profile => {
      this.contacts = profile.user.contacts;
    });

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

  addContact(contact: string){
    this.authService.addContact({'contact':contact}).subscribe( status=> {
      if(status.success == 1){
         this.flashMessage.show('Contact has been added', {cssClass: 'alert-success', timeout: 3000});

      } else {
         this.flashMessage.show('Failed to add contact', {cssClass: 'alert-danger', timeout: 3000});
      }
    })
  }

  isContact(contact: string) {
    return this.contacts.indexOf(contact) > -1
  }

}
