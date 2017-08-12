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
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactsComponent } from './contacts/contacts.component';

import {ValidateService} from './services/validate.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import {ChatService} from './services/chat.service';

import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/loggedIn.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent,canActivate:[LoggedInGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate:[LoggedInGuard]},
  {path: 'register', component: RegisterComponent,canActivate:[LoggedInGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'contacts', component: ContactsComponent, canActivate:[AuthGuard]},


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
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, ChatService, AuthGuard,LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
