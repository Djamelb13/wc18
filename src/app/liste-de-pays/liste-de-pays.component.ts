// liste-de-pays.component.ts (ListeDePaysComponent)

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Joueur } from '../data.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-liste-de-pays',
  templateUrl: './liste-de-pays.component.html',
  styleUrls: ['./liste-de-pays.component.scss']
})
export class ListeDePaysComponent implements OnInit {
  groupe: string = '';
  paysDuGroupe!: string;
  displayedColumns: string[] = ['nom', 'joueurs', 'championnat'];
  paysDetails : any;
  joueurDuGroupe: Joueur[] = [];
  fr: string = '';


  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {}

  ngOnInit() {
    console.log('paysDetails :', this.paysDetails);
    // Récupérez le paramètre de l'URL pour déterminer le groupe de pays (par exemple, '1' dans l'URL '/liste-de-pays/1').
    this.route.params.subscribe(params => {
      console.log('ok');
      const groupeId = params['id']; // Assurez-vous que le nom du paramètre correspond à ce qui est défini dans votre route.
      console.log('groupeid ?' ,groupeId);
      // Utilisez la fonction getPaysDetails pour obtenir la liste de pays du groupe spécifié.
      this.dataService.getPaysDetails({
        nom: groupeId,
        joueurs: []
      }).subscribe(paysListe => {
        if (paysListe) {
          // Supposons que la liste de pays est stockée dans une propriété "pays" de l'objet Pays.
          this.paysDuGroupe = paysListe.nom;
          this.joueurDuGroupe = paysListe.joueurs;
          this.fr = this.paysDuGroupe;
          console.log('joueur du groupe : ' , this.joueurDuGroupe)
          console.log('paysdugroupe dans nginit:', this.paysDuGroupe);
        }
      });
    });
  }
  

}