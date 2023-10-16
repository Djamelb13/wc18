// data.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getGroupesDePays() {
    return [
      {
        nom: 'Groupe A',
        pays: ['France', 'Belgique', 'Espagne', 'Italie']
      },
      {
        nom: 'Groupe B',
        pays: ['Allemagne', 'Pays-Bas', 'Portugal', 'Maroc']
      },
      {
        nom: 'Groupe C',
        pays: ['Angleterre', 'Écosse', 'Irlande']
      }
    ];
  }
}
