import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Message, MessageStatus, MessageType } from '@myaw-frontend/models';

@Component({
  selector: 'messenger-chat-message-container',
  imports: [DatePipe],
  templateUrl: './chat-message.container.html',
  styleUrls: ['./chat-message.container.css'],
})
export class ChatMessageContainer {
  protected readonly MessageType = MessageType;
  protected readonly MessageStatus = MessageStatus;

  message = input.required<Message>();
}
