export const routesConfig = {
  root: '',
  auth: {
    root: 'auth',
    login: 'login',
    register: 'register',
    forgotPassword: 'forgot-password',
  },
  client: {
    root: '',
    chatList: 'chat-list',
    chat: {
      root: 'chat',
      param: 'chatId',
    },
  },
} as const;

export const absoluteRoutesConfig = {
  root: '/',
  auth: {
    login: `/${routesConfig.auth.root}/${routesConfig.auth.login}`,
    register: `/${routesConfig.auth.root}/${routesConfig.auth.register}`,
    forgotPassword: `/${routesConfig.auth.root}/${routesConfig.auth.forgotPassword}`,
  },
  client: {
    root: `/${routesConfig.client.root}`,
    chatList: `/${routesConfig.client.chatList}`,
    chat: (chatId: string) => `/${routesConfig.client.chat.root}/${chatId}`,
  },
};
