export enum UserRoleEnumIncomingDTO {
  User = 'user',
  Admin = 'admin',
  SuperAdmin = 'super-admin',
}

export enum TokenTypeEnumIncomingDTO {
  Access = 'access',
  Refresh = 'refresh',
}

export interface AuthTokenDataIncomingDTO<
  U extends UserRoleEnumIncomingDTO,
  T extends TokenTypeEnumIncomingDTO,
> {
  userId: string;
  tokenId: string;
  sessionId: string;

  userRole: U;
  tokenType: T;

  issuedAt: Date;
  expiresAt: Date;
}
