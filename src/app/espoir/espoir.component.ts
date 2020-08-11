import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-espoir',
  templateUrl: './espoir.component.html',
  styleUrls: ['./espoir.component.css']
})
export class EspoirComponent implements OnInit {

  messages: Message[] ;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService
    .getMessages()
    .subscribe(data => {
      this.messages = data.map(e => {
        return {
          id: e.payload.doc.id,
          color: e.payload.doc.data(),
          date: e.payload.doc.data(),
          message: e.payload.doc.data()
        } as Message;
      })
    });
  }

}
