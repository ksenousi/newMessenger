import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contact-requests',
  templateUrl: './contact-requests.component.html',
  styleUrls: ['./contact-requests.component.css']
})
export class ContactRequestsComponent implements OnInit {

  requests = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getContactRequests().subscribe( requests => {
      this.requests = requests;
      console.log(this.requests);
    });
  }

}
