import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private socket;
  authToken: any;
  isDev: boolean = false; // change to false before deployment

  sendMessage(message){
    this.socket.emit('add-message', message);    
  }
  
  getMessages() {
    this.loadToken();
    let observable = new Observable(observer => {

      if(this.isDev){
      this.socket = io('http://localhost:8080/',{
        query: {
          token: this.authToken
        }
      });

    } else {
      this.socket = io({
        query: {
          token: this.authToken
        }
      }); 
    }

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