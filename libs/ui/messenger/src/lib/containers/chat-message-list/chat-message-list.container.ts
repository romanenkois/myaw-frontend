import { Component, input } from '@angular/core';

import { Message } from '@myaw-frontend/models';

import { ChatMessageContainer } from '../chat-message/chat-message.container';

@Component({
  selector: 'messenger-chat-message-list-container',
  imports: [ChatMessageContainer],
  templateUrl: './chat-message-list.container.html',
  styleUrls: ['./chat-message-list.container.css'],
})
export class ChatMessageListContainer {
  messages = input.required<Message[]>();
}
