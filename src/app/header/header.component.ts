import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titreDuGroupeOuPays!: string;
  Bienvenue!: string;
  @Input() isHome: boolean;
  selectedGroupe: any;
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;

  constructor(private router: Router, private dataService: DataService) {
    this.isHome = false;
  }

  ngOnInit() {
    // Vous pouvez initialiser des valeurs ici
    this.Bienvenue = 'Bienvenue';

    // Utilisez les services ou d'autres opérations d'initialisation ici
    this.titreDuGroupeOuPays = 'Initialisation';
  }

  // Utilize the DataService method to get groupesDePays
  groupesDePays = this.dataService.getGroupesDePays();

  onGroupSelected(selectedValue: string) {
    const groupeSelectionne = selectedValue;
    console.log('Groupe sélectionné :', groupeSelectionne);
    this.router.navigate(['/group', groupeSelectionne]);
    this.titreDuGroupeOuPays = groupeSelectionne;
    console.log('Titre mis à jour :', this.titreDuGroupeOuPays);
  }

  goBack() {
    window.history.back();
  }
}
