import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  Bienvenue!: string;
  @Input() isHome: boolean;
  selectedGroupe: any;
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;

  constructor(private router: Router, private dataService: DataService) {
    this.isHome = false;
  }

  // Utilize the DataService method to get groupesDePays
  groupesDePays = this.dataService.getGroupesDePays();

  onGroupSelected(selectedValue: string) {
    const groupeSelectionne = selectedValue;
    this.router.navigate(['/group', groupeSelectionne]);
  }
}
