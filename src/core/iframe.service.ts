import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IFrameService {
  private _currentUrl$ = new BehaviorSubject('');

  currentUrl$ = this._currentUrl$.asObservable();

  navigate(url: string) {
    this._currentUrl$.next(url);
  }
}
