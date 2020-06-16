import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

import { HtmlDocumentModel } from './shared/html-document/html-document.model';
import { HtmlDocumentService } from './shared/html-document/html-document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  routeConfig$: Subscription;

  loading = false;

  constructor(
    private htmlDocument: HtmlDocumentService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const appTitle = this.htmlDocument.getTitle();
    this.routeConfig$ = this.router.events
      .pipe(
        tap((event) => {
          if (event instanceof NavigationStart) {
            this.loading = true;
          } else if (event instanceof NavigationEnd) {
            this.loading = false;
          }
        }),
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          return this.activedRoute;
        }),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data: HtmlDocumentModel) => {
        if (data.title) {
          this.htmlDocument.setTitle(data.title);
        } else {
          this.htmlDocument.setTitle(appTitle);
        }
      });
  }
  ngOnDestroy() {
    this.routeConfig$.unsubscribe();
  }
}
