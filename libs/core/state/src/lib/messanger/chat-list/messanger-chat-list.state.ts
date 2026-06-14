/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

import {
  ChatRoom,
  ChatRoomGroup,
  ChatRoomsState,
  Status,
} from '@myaw-frontend/models';
import { computed } from '@angular/core';

const initialState: ChatRoomsState = {
  status: Status.Idle,
  data: null,
  activeChatRoomId: null,
  activeChatGroupId: null,
};

const dummyData: ChatRoomsState = {
  status: Status.Resolved,
  data: [
    {
      id: '1',
      name: 'Private Chats',
      rooms: [
        {
          id: '1',
          name: 'Chat 1',
        },
        {
          id: '2',
          name: 'Chat 2',
        },
      ],
    },
  ],
  activeChatRoomId: null,
  activeChatGroupId: null,
};

export const MessangerChatRoomsListStore = signalStore(
  withState(dummyData),
  withComputed(({ data, activeChatGroupId }) => ({
    activeChatGroup: computed<ChatRoomGroup | null>(() => {
      const groups = data();
      if (!groups) return null;
      return groups.find((group) => group.id === activeChatGroupId()) ?? null;
    }),
  })),
  withComputed(({ activeChatGroup, activeChatRoomId }) => ({
    activeChatRoom: computed<ChatRoom | null>(() => {
      const group = activeChatGroup();
      if (!group) return null;
      return group.rooms.find((room) => room.id === activeChatRoomId()) ?? null;
    }),
  })),
  withMethods((store) => ({
    setActiveChatGroupId(id: ChatRoomGroup['id'] | null): void {
      patchState(store, { activeChatGroupId: id, activeChatRoomId: null });
    },
    setActiveChatRoomId(id: ChatRoom['id'] | null): void {
      patchState(store, { activeChatRoomId: id });
    },
  })),
);
