import { Component } from '@angular/core';

import { ChatViewContainer } from '../../containers';

@Component({
  selector: 'messenger-chat-page',
  imports: [ChatViewContainer],
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.css'],
})
export class ChatPage {}
