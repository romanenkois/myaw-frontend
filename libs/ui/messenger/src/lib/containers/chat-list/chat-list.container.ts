import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { absoluteRoutesConfig } from '@myaw-frontend/configuration';
import { ChatRoomGroup } from '@myaw-frontend/models';
import { MessangerFacade } from '@myaw-frontend/state';

@Component({
  selector: 'messenger-chat-list-container',
  imports: [RouterLink],
  templateUrl: './chat-list.container.html',
  styleUrls: ['./chat-list.container.css'],
})
export class ChatListContainer {
  private readonly _messangerFacade = inject(MessangerFacade);

  protected readonly absoluteRoutesConfig = absoluteRoutesConfig;

  protected chatList = computed<ChatRoomGroup[]>(() => {
    return [];
    // return this._messangerFacade.chatList();
  });
}
