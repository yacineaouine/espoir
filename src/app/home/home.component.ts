import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MessageService } from '../message.service';
import { Message } from '../message.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  favoriteColor: string = 'black';
  color = 'black';
  message = '';
  myMessage: Message;
  profileForm = this.fb.group({
    message: ['', Validators.required],
    color: this.color,
    date: ''
    });
    
    colors: string[] = ['black', '#4285f4', '#ea4335', '#fbbc05', '#34a853'];

  constructor(
    private fb: FormBuilder, 
    private messageService: MessageService,
    private route: Router
    ) { }

  ngOnInit() {
    
  }

  onSubmit() {
    
    const date = new Date();
    this.myMessage = this.profileForm.value;
    this.myMessage.date = date.toDateString();
    console.warn(this.myMessage);
    this.create(this.myMessage);
  }

  create(message: Message){
    this.messageService.createMessage(message);
    this.route.navigate(['espoir']);
}


}
