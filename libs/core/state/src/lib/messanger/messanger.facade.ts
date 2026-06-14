import { inject, Injectable } from '@angular/core';

import { MessangerChatListService } from './chat-list';

@Injectable({
  providedIn: 'root',
})
export class MessangerFacade {
  private readonly _messangerChatListService = inject(MessangerChatListService);

  // #region Chat List

  // public chatList = this._messangerChatListService.chatList;

  // #endregion Chat List
}
