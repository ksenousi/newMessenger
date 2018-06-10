import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev: boolean;
  constructor(private http: Http) {
    this.isDev = true; // Change to false before deployment
  }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('users/register');
    return this.http.post(ep, user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('users/authenticate');
    return this.http.post(ep, user, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('users/profile');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  getChat(chatname) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('chatname', chatname);
    const ep = this.prepEndpoint('chats/getchat');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  getChatlist() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('chats/getchatlist');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  searchUsers(searchCriteria: string) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    headers.append('searchcriteria', searchCriteria);
    const ep = this.prepEndpoint('users/search');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  addContact(contact: string) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('contacts/addcontact');
    return this.http.post(ep, { 'contact': contact }, { headers: headers })
      .map(res => res.json());
  }

  removeContact(contact) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('contacts/removecontact');
    return this.http.post(ep, contact, { headers: headers })
      .map(res => res.json());
  }

  getContactRequests() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('requests/getcontactrequests');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  addContactRequest(contact) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('requests/addcontactrequest');
    return this.http.post(ep, { 'contact': contact }, { headers: headers })
      .map(res => res.json());
  }

  removeContactRequest(contact) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('requests/removecontactrequest');
    return this.http.post(ep, { 'contact': contact }, { headers: headers })
      .map(res => res.json());
  }

  setMessagesSeen(chatname, numSeen) {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('chat/setmessagesseen');
    return this.http.post(ep, { 'chatname': chatname, 'numSeen': numSeen }, { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  prepEndpoint(ep) {
    if (this.isDev) {
      return 'http://localhost:8080/' + ep;
    } else {
      return ep;
    }
  }
}
