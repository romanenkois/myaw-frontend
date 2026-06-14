import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class AuthApiService {
  private readonly _httpClient = inject(HttpClient);

  private readonly _baseUrl = 'http://localhost:3000/api/auth';

  public logIn() {
    return this._httpClient.post(`${this._baseUrl}/login`, {}).pipe(
      catchError((error) => {
        return throwError(
          () => new Error(`Failed to log in: ${error?.message}`),
        );
      }),
    );
  }
}
