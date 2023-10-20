import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private titleSubject = new BehaviorSubject<string>('Default Title');
  title$ = this.titleSubject.asObservable();

  // Define the setTitle method
  setTitle(newTitle: string) {
    this.titleSubject.next(newTitle);
  }
  updateTitle(newTitle: string) {
    this.titleSubject.next(newTitle);
  }
}
