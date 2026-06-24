export type Message = MessageText | MessageImage | MessageSticker;

export enum MessageType {
  Text = 'text',
  Image = 'image',
  Sticker = 'sticker',
}

export enum MessageStatus {
  Sending = 'sending',
  Delivered = 'delivered',
  Send = 'send',
  Error = 'error',
}

export interface MessageBase<T extends MessageType> {
  id: string;
  chatId: string;
  senderId: string;
  timestamp: string;
  status: MessageStatus;
  type: T;
  content: Record<string, unknown>;
}

export interface MessageText extends MessageBase<MessageType.Text> {
  content: {
    text: string;
  };
}

export interface MessageImage extends MessageBase<MessageType.Image> {
  content: {
    imageUrl: string;
  };
}

export interface MessageSticker extends MessageBase<MessageType.Sticker> {
  content: {
    stickerImageUrl: string;
  };
}
