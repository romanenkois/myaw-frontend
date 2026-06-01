export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Updating = 'updating',
  Resolved = 'resolved',
  Error = 'error',
}

export interface ItemError {
  errorType: ErrorType;
  errorMessage: string;
}

export enum ErrorType {
  Unknown = 'unknown',
  NetworkUnavailable = 'networkUnavailable',
  ServerUnavailable = 'serverUnavailable',
  RateLimited = 'rateLimited',
  Unauthorized = 'unauthorized',
  Forbidden = 'forbidden',
  InvalidResponse = 'invalidResponse',
}

export type ItemState<T> =
  | { data: null; status: Status.Idle }
  | { data: null; status: Status.Loading }
  | { data: T; status: Status.Updating }
  | { data: T; status: Status.Resolved }
  | {
      data: T | null;
      status: Status.Error;
      error: ItemError;
    };
