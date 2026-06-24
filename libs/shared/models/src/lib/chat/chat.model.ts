import { ItemState } from '../..';

export interface ChatRoom {
  id: string;
  name: string;
}

export interface ChatRoomGroup {
  id: string;
  name: string;
  rooms: ChatRoom[];
}

export type ChatRoomsState = ItemState<ChatRoomGroup[]> & {
  activeChatGroupId: ChatRoomGroup['id'] | null;
  activeChatRoomId: ChatRoom['id'] | null;
};
