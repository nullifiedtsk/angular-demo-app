import { Component, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, finalize, map, startWith, tap } from "rxjs/operators";

@Injectable()
export class MediaMatcherListener {
  private breakPoints = [
    { rules: Breakpoints.Small, name: 'Small' },
    { rules: Breakpoints.Medium, name: 'Medium' },
    { rules: Breakpoints.Large, name: 'Large' },
  ];

  changes$: Observable<{ small: boolean; medium: boolean; large: boolean }>;

  constructor(private mediaMatcher: MediaMatcher) {
    const queries$ = this.breakPoints.map((x) => {
      let complete: () => void;
      let next: (x: boolean) => void;
      let onChange: () => void;
      const query = this.mediaMatcher.matchMedia(x.rules);

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
  templateUrl: './cdk-media-matcher.example.html',
  styleUrls: ['./cdk-media-matcher.example.scss'],
  providers: [MediaMatcherListener],
})
export class CdkMediaMatcherExample {
  changes$ = this.mediaMatcher.changes$.pipe(
    tap((x) => {
      console.log(`CDK MediaMatcher result: `, x);
    })
  );

  constructor(public mediaMatcher: MediaMatcherListener) {}
}
