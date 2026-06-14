import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import { AuthData } from '../models';
import { ItemState, Status } from '@myaw-frontend/models';

const initialState: ItemState<AuthData> = {
  status: Status.Idle,
  data: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((state) => ({
    logOut() {
      patchState(state, {
        status: Status.Idle,
        data: null,
      });
    },
  }))
);
