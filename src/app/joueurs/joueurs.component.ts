import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.scss']
})
export class JoueursComponent implements OnInit {
  pays: string = '';
  joueurs: any[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pays = params['pays'];

      // Utilisez le service de données pour obtenir les détails des joueurs du pays
      this.joueurs = this.dataService.getJoueursByPays(this.pays);
    });
  }
}
