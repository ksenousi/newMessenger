import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-search-contacts',
  templateUrl: './search-contacts.component.html',
  styleUrls: ['./search-contacts.component.css']
})
export class SearchContactsComponent implements OnInit {

  username: string;

  searchCriteria: string;
  results = [];
  contacts = [];

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.contacts = profile.user.contacts;
      this.username = profile.user.username;
    });

  }

  searchContact() {
    this.results = [];
    this.authService.searchUsers(this.searchCriteria).subscribe(users => {

      if (users.error == 404) {
        this.flashMessage.show('User not found', { cssClass: 'alert-danger', timeout: 3000 });
        return;
      }

      this.results = users;
      console.log(JSON.stringify(users))
    });
  }

  addRequest(contact) {
    this.authService.addContactRequest(contact.username).subscribe(status => {
      if (status.success == true) {
        this.flashMessage.show('Contact request has been sent', { cssClass: 'alert-success', timeout: 3000 });
        contact.type = 'requestSent';

      } else {
        this.flashMessage.show('Failed to add contact', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

  removeContact(contact) {
    this.authService.removeContact({ 'contact': contact.username }).subscribe(status => {
      if (status.success == true) {
        this.flashMessage.show('Contact has been removed', { cssClass: 'alert-success', timeout: 3000 });
        contact.type = 'newUser';

      } else {
        this.flashMessage.show('Failed to remove contact', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }

  isContact(contact: string) {
    return this.contacts.indexOf(contact) > -1;
  }
}