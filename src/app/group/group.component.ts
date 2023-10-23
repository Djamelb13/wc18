import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groupId: string = '0'; // Initialisez avec une valeur par défaut en tant que chaîne
  groupDetails: any;
  selectedGroup: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const idGroupeA = 1; // L'ID du "Groupe A"
    const groupe = this.dataService.getGroupeById(idGroupeA);
    const resolvedData = this.route.snapshot.data['resolvedData'];
    if (groupe) {
      this.selectedGroup = groupe;
      // Autres actions à effectuer avec le groupe
    } else {
      console.error('Groupe non trouvé');
    }
  }
}
