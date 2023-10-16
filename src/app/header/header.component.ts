import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isHome: boolean;

  constructor(private router: Router) { // Ajoutez le service Router ici
    this.isHome = false;
  }

  groupesDePays = [
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

  onGroupSelected(event: { value: any; }) {
    const groupeSelectionne = event.value;
    const groupe = this.groupesDePays.find(g => g.nom === groupeSelectionne);
  
    if (groupe) {
      // Rediriger l'utilisateur vers la page de liste de pays avec le groupe sélectionné
      this.router.navigate(['/liste-de-pays', groupe.nom], { state: { pays: groupe.pays } });
    }
  }
}
