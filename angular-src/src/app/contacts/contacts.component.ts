import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  username: string;

  searchCriteria: string;
  results = [];
  contacts = [];

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe( profile => {
      this.contacts = profile.user.contacts;
      this.username = profile.user.username;
    });

  }

  searchContact(){
    this.results = [];
    this.authService.searchUsers(this.searchCriteria).subscribe( users => {

      if(users.error == 404){
        this.flashMessage.show('User not found', {cssClass: 'alert-danger', timeout: 3000});
        return;
      }

      this.results = users.map(user => user.username).filter(result => result != this.username );

    });
  }

  addContact(contact: string){
    this.authService.addContact({'contact':contact}).subscribe( status=> {
      if(status.success == 1){
         this.flashMessage.show('Contact has been added', {cssClass: 'alert-success', timeout: 3000});

      } else {
         this.flashMessage.show('Failed to add contact', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
    this.results = [];
  }

  removeContact(contact: string) {
    this.authService.removeContact({'contact':contact}).subscribe( status=> {
      if(status.success == 1){
         this.flashMessage.show('Contact has been removed', {cssClass: 'alert-success', timeout: 3000});

      } else {
         this.flashMessage.show('Failed to remove contact', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

  isContact(contact: string) {
    console.log("iscontact" + (this.contacts.indexOf(contact) > -1));
    return this.contacts.indexOf(contact) > -1;
  }

}