import { Component, Injectable } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, finalize, map, startWith, tap } from 'rxjs/operators';

@Injectable()
export class WindowMatchMediaListener {
  private breakPoints = [
    { rules: Breakpoints.Small, name: 'Small' },
    { rules: Breakpoints.Medium, name: 'Medium' },
    { rules: Breakpoints.Large, name: 'Large' },
  ];

  changes$: Observable<{ small: boolean; medium: boolean; large: boolean }>;

  constructor() {
    if (!window) {
      throw new Error('This feature is supported only by browser');
    }

    const queries$ = this.breakPoints.map((x) => {
      let complete: () => void;
      let next: (x: boolean) => void;
      let onChange: () => void;
      const query = window.matchMedia(x.rules);

      return new Observable<boolean>((observer) => {
        next = observer.next.bind(observer);
        complete = observer.complete.bind(observer);
        onChange = () => next(query.matches);
        query.addEventListener('change', onChange);
      }).pipe(
        startWith(query.matches),
        finalize(() => {
          query.removeEventListener('change', onChange);
          complete();
        })
      );
    });

    this.changes$ = combineLatest(queries$).pipe(
      map((result) => ({
        small: result[0],
        medium: result[1],
        large: result[2],
      })),
      debounceTime(0)
    );
  }
}

@Component({
  templateUrl: './native-media-matcher.example.html',
  styleUrls: ['./native-media-matcher.example.scss'],
  providers: [WindowMatchMediaListener],
})
export class NativeMediaMatcherExample {
  changes$ = this.nativeMatcher.changes$.pipe(
    tap((x) => {
      console.log(`Native MediaMatcher result: `, x);
    })
  );

  constructor(public nativeMatcher: WindowMatchMediaListener) {}
}
