import { Route } from '@angular/router';
import { routesConfig } from '@myaw-frontend/configuration';

export const appRoutes: Route[] = [
  {
    path: routesConfig.client.root,
    loadComponent: () =>
      import('@myaw-frontend/client-view').then(
        (m) => m.ClientViewMainContainer,
      ),
    children: [
      {
        path: routesConfig.client.chatList,
        loadComponent: () =>
          import('@myaw-frontend/messenger-ui').then(
            (m) => m.ChatsPage,
          ),
      },
      {
        path: `${routesConfig.client.chat.root}/:${routesConfig.client.chat.param}`,
        loadComponent: () =>
          import('@myaw-frontend/messenger-ui').then(
            (m) => m.ChatPage,
          ),
      },
      {
        path: '',
        redirectTo: routesConfig.client.chatList,
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: routesConfig.client.chatList,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: routesConfig.auth.root,
    redirectTo: routesConfig.client.root,
  },
  {
    path: '**',
    redirectTo: routesConfig.client.root,
    pathMatch: 'full',
  },
];
