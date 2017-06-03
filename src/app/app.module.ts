import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatListComponent } from './content/chat-list/chat-list.component';
import { ChatRoomComponent } from './content/chat-room/chat-room.component';
import { ChatBarComponent } from './content/chat-room/chat-bar/chat-bar.component';
import {ContentComponent} from './content/content.component';
import { MessageComponent } from './content/chat-room/message/message.component';
import { ChatItemComponent } from './content/chat-list/chat-item/chat-item.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatListComponent,
    ChatRoomComponent,
    ChatBarComponent,
    ContentComponent,
    MessageComponent,
    ChatItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
