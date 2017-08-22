import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact-requests',
  templateUrl: './contact-requests.component.html',
  styleUrls: ['./contact-requests.component.css']
})
export class ContactRequestsComponent implements OnInit {

  requests = [];

  constructor(private authService: AuthService, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    this.authService.getContactRequests().subscribe( requests => {
      this.requests = requests;
      console.log(this.requests);
    });
  }

  onAccept(contact) {
    this.authService.addContact(contact).subscribe( status => {
      if(status.success == false){
        this.flashMessage.show('Failed to add contact', { cssClass: 'alert-danger', timeout: 3000 });
      }
    })
  }

  onReject(contact) {
    this.authService.removeContactRequest(contact).subscribe( status => {
      if(status.success = false){
    this.flashMessage.show('Failed to remove request', { cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }

}
