import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groupe: string = '';
  paysDuGroupe: string[] = [];

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {} 

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupe = params['groupe']; 

      this.paysDuGroupe = this.getPaysDuGroupe(this.groupe);

    });
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
