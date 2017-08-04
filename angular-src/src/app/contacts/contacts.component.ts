import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  searchCriteria: string;
  results = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  searchContact(){
    this.results = [];
    this.authService.searchUsers(this.searchCriteria).subscribe( users => {
      for(var i=0;i< users.length;i++){
        this.results.push(users[i].username);
      }
    });
  }

}
