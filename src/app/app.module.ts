import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatListComponent } from './dashboard/chat-list/chat-list.component';
import { ChatRoomComponent } from './dashboard/chat-room/chat-room.component';
import { ChatBarComponent } from './dashboard/chat-room/chat-bar/chat-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './dashboard/chat-room/message/message.component';
import { ChatItemComponent } from './dashboard/chat-list/chat-item/chat-item.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chatroom', component: DashboardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatListComponent,
    ChatRoomComponent,
    ChatBarComponent,
    DashboardComponent,
    MessageComponent,
    ChatItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
