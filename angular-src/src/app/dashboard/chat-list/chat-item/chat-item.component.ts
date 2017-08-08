import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  @Input() chatName: string
  @Output('chatSelected') chatSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChatSelected(){
    console.log(this.chatName +"selected");
    this.chatSelected.emit(this.chatName);
  }

}
