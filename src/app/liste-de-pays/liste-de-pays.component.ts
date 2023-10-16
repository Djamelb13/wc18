// liste-de-pays.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service'; // Assurez-vous d'importer le service de données

@Component({
  selector: 'app-liste-de-pays',
  templateUrl: './liste-de-pays.component.html',
  styleUrls: ['./liste-de-pays.component.scss']
})
export class ListeDePaysComponent implements OnInit {
  groupe: string = '';
  paysDuGroupe: string[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupe = params['groupe']; // Récupérez le nom du groupe depuis les paramètres de route
      // Utilisez le nom du groupe pour obtenir les pays correspondants depuis le service
      this.paysDuGroupe = this.getPaysDuGroupe(this.groupe);
    });
  }

  getPaysDuGroupe(groupe: string): string[] {
    const groupesDePays = this.dataService.getGroupesDePays();
    const groupeSelectionne = groupesDePays.find(g => g.nom === groupe);
    return groupeSelectionne ? groupeSelectionne.pays : [];
  }
}
