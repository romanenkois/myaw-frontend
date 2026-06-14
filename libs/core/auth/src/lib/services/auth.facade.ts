import { inject, Injectable } from '@angular/core';
import { AuthStore } from '../state';

@Injectable({
  providedIn: 'root',
  // providers: [AuthStore],
})
export class AuthFacade {
  private _authStore = inject(AuthStore);
}
