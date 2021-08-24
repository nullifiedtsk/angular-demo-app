import { Component, OnDestroy } from '@angular/core';
import { IFrameService } from '../core/iframe.service';
import { extractMenuFromDemoApplicationRoutes, MenuItem } from '../core/menu.service';
import { FlattenedTreeItem, TreeManager } from '../core/tree-flattener';
import { Subject } from 'rxjs';
import { ROOT_CONFIG } from './app-routing.module.config';
import { NavigationEnd, Router } from '@angular/router';
import { isEqual } from 'lodash-es';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  destroy$ = new Subject();
  currentUrl$ = this.frameService.currentUrl$;
  title = 'Angular Demo App';
  treeManager?: TreeManager<MenuItem>;
  items?: FlattenedTreeItem<MenuItem>[];
  isDocumentationFrameOpened = false;

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  constructor(private frameService: IFrameService, private router: Router, private sanitizer: DomSanitizer) {
    const items = extractMenuFromDemoApplicationRoutes(ROOT_CONFIG);
    this.treeManager = new TreeManager<MenuItem>(items, (x) => x.children);
    this.items = this.treeManager.flatten();

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((x) => {
      if (x instanceof NavigationEnd) {
        const docUrl = this.findItemWithUrl(x.url)?.documentationUrl || '';
        if (this.isDocumentationFrameOpened && docUrl) {
          this.frameService.navigate(this.sanitizer.bypassSecurityTrustResourceUrl(docUrl) as any);
        }
      }
    });
  }

  toggleDocumentation() {
    if (this.isDocumentationFrameOpened) {
      this.isDocumentationFrameOpened = false;
      return;
    }

    const docUrl = this.findItemWithUrl(this.router.url)?.documentationUrl;
    if (docUrl) {
      this.isDocumentationFrameOpened = true;
      this.frameService.navigate(this.sanitizer.bypassSecurityTrustResourceUrl(docUrl) as any);
    }
  }

  private findItemWithUrl(url: string) {
    return this.items?.find((x) => isEqual(this.convertCommandToUrl(x.value.path), url))?.value;
  }

  private convertCommandToUrl(command: string[]) {
    return `/${command.join('/')}`;
  }
}
