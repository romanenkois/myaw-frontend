export enum UserRoleEnum {
  User = 'user',
  Admin = 'admin',
  SuperAdmin = 'super-admin',
}

export enum TokenTypeEnum {
  Access = 'access',
  Refresh = 'refresh',
}

export interface AuthTokenData<T extends TokenTypeEnum> {
  token: string;
  userId: string;
  tokenId: string;
  sessionId: string;

  userRole: UserRoleEnum;
  tokenType: T;

  issuedAt: Date;
  expiresAt: Date;
}

export interface AuthData {
  accessToken: AuthTokenData<TokenTypeEnum.Access> | null;
  refreshToken: AuthTokenData<TokenTypeEnum.Refresh> | null;
}
