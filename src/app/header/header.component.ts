// header.component.ts
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title!: string;
  titreDuGroupeOuPays!: string;
  titreDuGroupeOuPays$!: Observable<string>;
  @Input() isHome: boolean;
  selectedGroupe: any;
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;
  previousSelectedGroup!: string;

  constructor(private router: Router, private dataService: DataService) {
    this.isHome = false;
  }

  ngOnInit() {
    this.dataService.titreDuGroupeOuPays$.subscribe((titre: string) => {
      this.titreDuGroupeOuPays = titre;
    });
  }

  groupesDePays = this.dataService.getGroupesDePays();

  onGroupSelected(selectedValue: string) {
    const groupeSelectionne = selectedValue;
    this.dataService.updateTitreDuGroupeOuPays(groupeSelectionne);
    this.previousSelectedGroup = groupeSelectionne; // Stockez le groupe précédemment sélectionné
    this.router.navigate(['/group', groupeSelectionne]);
  }

  goBack() {
    if (this.previousSelectedGroup) {
      this.dataService.updateTitreDuGroupeOuPays(this.previousSelectedGroup);
      this.router.navigate(['/group', this.previousSelectedGroup]); // Naviguez vers la page précédemment sélectionnée
    }
  }
}
