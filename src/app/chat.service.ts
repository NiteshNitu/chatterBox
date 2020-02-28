// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatService {

//   constructor() { }
// }
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;    

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
      console.log('sending ', message);
      this.socket.emit('new-message', message);
    }

    public getMessages = () => {
      return Observable.create((observer) => {
        console.log(observer);
          this.socket.on('new-message', (message) => {
              console.log('message = ', message);
              observer.next(message);
          });
      });
    }
}