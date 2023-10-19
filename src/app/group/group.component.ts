import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser'; // Importez le service Title
import { DataService } from '../data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groupe: string = '';
  paysDuGroupe: string[] = [];
  titreDuGroupeOuPays: string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private titleService: Title // Injectez le service Title ici
  ) {this.titreDuGroupeOuPays = '';}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupe = params['groupe'];
  
      // Vérifiez si this.groupe est défini avant de définir le titre
      if (this.groupe) {
        this.titreDuGroupeOuPays = `Groupe ${this.groupe}`;
        this.titleService.setTitle(this.titreDuGroupeOuPays);
      }
  
      this.paysDuGroupe = this.getPaysDuGroupe(this.groupe);
  
      // Ajoutez un console.log pour vérifier si cette partie est exécutée
      console.log('Route changed:', this.groupe);
    });
  }

  ngAfterViewInit(): void {
    this.titleService.setTitle(this.titreDuGroupeOuPays);
  }
  
  getPaysDuGroupe(groupe: string): string[] {
    const groupesDePays = this.dataService.getGroupesDePays();
    const groupeSelectionne = groupesDePays.find(g => g.nom === groupe);
    return groupeSelectionne ? groupeSelectionne.pays : [];
  }

  onPaysSelected(pays: string) {
    this.router.navigate(['/joueurs', pays]);
  }
}
