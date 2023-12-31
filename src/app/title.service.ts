import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private pageTitleSubject = new BehaviorSubject<string>(''); // Initialiser le sujet avec une chaîne vide
  pageTitle$ = this.pageTitleSubject.asObservable();

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary')
      )
      .subscribe((route) => {
        const pageTitle = route.snapshot.data['title'];
        this.titleService.setTitle(pageTitle);
        this.pageTitleSubject.next(pageTitle); // Mettre à jour le sujet avec le nouveau titre
      });
  }

  setTitle(value: string = '') {
    this.titleService.setTitle(value);
    this.pageTitleSubject.next(value); // Mettre à jour le sujet avec le nouveau titre
  }
}
