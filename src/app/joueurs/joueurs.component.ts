import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.scss']
})
export class JoueursComponent implements OnInit {
  joueurs: any[] = []; // Déclarez le type approprié pour vos joueurs
  pays!: string; // Assurez-vous que "pays" est initialisé avec une valeur

  constructor(private dataService: DataService) {}

  ngOnInit() {
    //this.dataService.getJoueursByPays(this.pays).subscribe((data: any[]) => {
      //this.joueurs = data;
    //});
  }
}
