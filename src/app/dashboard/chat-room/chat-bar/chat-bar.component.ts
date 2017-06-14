import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {
  @Output('messageEntered') messageEntered = new EventEmitter<{message: string, outgoing: boolean}>();
  messageInput = '';

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageEntered.emit({message: this.messageInput,
      outgoing: true});
    this.messageInput = '';
  }


}
