import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isHome: boolean;
  selectedGroupe: any; 
  

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
    this.router.navigate(['/group', groupeSelectionne]);
  }
  
  
  
  
    
}
