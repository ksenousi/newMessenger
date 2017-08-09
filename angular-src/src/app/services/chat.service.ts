import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:8000';  
  private socket;
  authToken: any;


  sendMessage(message){
    this.socket.emit('add-message', message);    
  }
  
  getMessages() {
    this.loadToken();
    let observable = new Observable(observer => {
      this.socket = io(this.url, {
        query: {
          token: this.authToken
        }
      });
      this.socket.on('message', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}