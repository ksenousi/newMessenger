import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  searchCriteria: String;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    
  }

}
