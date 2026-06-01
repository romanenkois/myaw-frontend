import { computed, Injectable, signal } from '@angular/core';
import {
  AuthData,
  AuthTokenData,
  TokenTypeEnum,
  UserRoleEnum,
} from '../models';

@Injectable()
export class AuthState {
  // #region Private State

  private readonly _refreshToken =
    signal<AuthTokenData<TokenTypeEnum.Refresh> | null>(null);
  private readonly _accessToken =
    signal<AuthTokenData<TokenTypeEnum.Access> | null>(null);

  private readonly _authData = computed<AuthData | null>(() => {
    const refreshToken = this._refreshToken();
    const accessToken = this._accessToken();

    return refreshToken && accessToken ? { refreshToken, accessToken } : null;
  });
  private readonly _isAuthenticated = computed<boolean>(
    () => !!this._authData(),
  );
  private readonly _userRole = computed<UserRoleEnum | null>(() => {
    const refreshToken = this._refreshToken();

    return refreshToken ? refreshToken.userRole : null;
  });

  // #endregion Private State

  // #region Public State

  public authData = computed(() => this._authData());
  public isAuthenticated = computed(() => this._isAuthenticated());
  public userRole = computed(() => this._userRole());

  public setRefreshToken(params: {
    token: AuthTokenData<TokenTypeEnum.Refresh> | null;
  }): void {
    this._refreshToken.set(params.token);
  }
  public setAccessToken(params: {
    token: AuthTokenData<TokenTypeEnum.Access> | null;
  }): void {
    this._accessToken.set(params.token);
  }

  // #endregion Public State
}
