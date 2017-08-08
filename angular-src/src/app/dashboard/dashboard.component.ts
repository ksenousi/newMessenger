import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  chatname: string;

  constructor() { }

  ngOnInit() {
  }

  onChatSelected(chatname: string) {
   this.chatname =  chatname;
  }

  


}
