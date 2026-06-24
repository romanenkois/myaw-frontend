import { Component, computed } from '@angular/core';

import { Message } from '@myaw-frontend/models';

import { ChatBottomBarContainer } from '../chat-bottom-bar/chat-bottom-bar.container';
import { ChatMessageListContainer } from '../chat-message-list/chat-message-list.container';

@Component({
  selector: 'messenger-chat-view-container',
  imports: [ChatBottomBarContainer, ChatMessageListContainer],
  templateUrl: './chat-view.container.html',
  styleUrls: ['./chat-view.container.css'],
})
export class ChatViewContainer {
  messages = computed<Message[]>(() => []);
}
