import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResolveEnd, Router, ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CustomTitleStrategy {
  constructor(private titleService: Title, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof ResolveEnd) {
        const route = this.router.routerState.root.firstChild;
        this.updateTitle(route);
      }
    });
  }

  private updateTitle(route: ActivatedRoute | null): void {
    if (route) {
      const title = this.getDeepestTitle(route);
      if (title !== undefined) {
        this.titleService.setTitle(`My Application | ${title}`);
      }
    }
  }

  private getDeepestTitle(route: ActivatedRoute): any {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['title'];
  }
}
