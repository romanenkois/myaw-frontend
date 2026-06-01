import { inject, Injectable } from '@angular/core';
import { AuthState } from '../state';

@Injectable({
  providedIn: 'root',
  providers: [AuthState],
})
export class AuthFacade {
  private _authState = inject(AuthState);



  public logOut(): void {
    this._authState.setAccessToken({ token: null });
    this._authState.setRefreshToken({ token: null });
  };
}
