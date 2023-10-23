// liste-de-pays.component.ts (ListeDePaysComponent)

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-de-pays',
  templateUrl: './liste-de-pays.component.html',
  styleUrls: ['./liste-de-pays.component.scss']
})
export class ListeDePaysComponent implements OnInit {
  groupe: string = '';
  paysDuGroupe: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupe = params['groupe'];
    });

    // Supprimez cet appel à la méthode getPaysDuGroupe
  }

  onPaysSelected(pays: string) {
    this.router.navigate(['/group', pays]); // Modifiez la route pour naviguer vers le composant GroupComponent
  }
}
