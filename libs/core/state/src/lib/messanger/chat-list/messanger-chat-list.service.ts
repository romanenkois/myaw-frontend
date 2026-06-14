import { computed, inject, Injectable, linkedSignal } from '@angular/core';

// import { ChatRoomGroup } from '@myaw-frontend/models';
import { MessangerChatRoomsListStore } from './messanger-chat-list.state';

@Injectable({
  providedIn: 'root',
})
export class MessangerChatListService {
  public messangerChatRoomsListStore = inject(MessangerChatRoomsListStore);



  public loadMessangerChatRoomsList(): void {
    //
  }
}
