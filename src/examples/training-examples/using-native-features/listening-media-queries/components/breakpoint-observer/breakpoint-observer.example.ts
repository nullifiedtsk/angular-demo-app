import { Component, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { combineLatest, Observable } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';

@Injectable()
export class CdkMediaQueryListener {
  changes$: Observable<{ small: boolean; medium: boolean; large: boolean }>;

  private breakPoints = [Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large];

  constructor(private breakpointObserver: BreakpointObserver) {
    const allQueries$ = this.breakPoints.map((x) => this.breakpointObserver.observe(x));
    this.changes$ = combineLatest(allQueries$).pipe(
      map((result) => ({
        small: result[0].matches,
        medium: result[1].matches,
        large: result[2].matches,
      })),
      debounceTime(0)
    );
  }
}

@Component({
  templateUrl: './breakpoint-observer.example.html',
  styleUrls: ['./breakpoint-observer.example.scss'],
  providers: [CdkMediaQueryListener],
})
export class BreakpointObserverExample {
  changes$ = this.cdkService.changes$.pipe(
    tap((x) => {
      console.log(`CDK BreakpointObserver result: `, x);
    })
  );

  constructor(public cdkService: CdkMediaQueryListener) {}
}
