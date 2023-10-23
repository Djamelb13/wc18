import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class MyDataResolver implements Resolve<any> {
  constructor(private dataService: DataService) {}

  resolve(): Observable<any> {
    return this.dataService.getData(); // Utilisez votre propre logique pour obtenir les données
  }
}
