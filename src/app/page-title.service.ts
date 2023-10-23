// Dans PageTitleService.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PageTitleService {
  private pageTitleSubject = new BehaviorSubject<string>('Titre initial de la page');
  pageTitle$ = this.pageTitleSubject.asObservable();

  updateTitle(newTitle: string) {
    this.pageTitleSubject.next(newTitle);
  }
  
}