import { Component } from '@angular/core';

import { ChatListContainer } from '../../containers';

@Component({
  selector: 'messenger-chats-page',
  imports: [ChatListContainer],
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.css'],
})
export class ChatsPage {}
