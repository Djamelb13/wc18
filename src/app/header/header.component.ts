// header.component.ts
import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title!: string;
  titreDuGroupeOuPays!: string;
  titreDuGroupeOuPays$!: Observable<string>;
  @Input() isHome: boolean;
  selectedGroupe: any;
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;
  previousSelectedGroup!: string;
  private titreSubscription: Subscription = new Subscription;

  constructor(
    private router: Router,
    private dataService: DataService
  ) {
    this.isHome = false;
  }

  ngOnInit() {
    this.titreSubscription = this.dataService.titreDuGroupeOuPays$.subscribe((titre: string) => {
      this.titreDuGroupeOuPays = titre;
      this.previousSelectedGroup = titre;
    });
  }

  ngOnDestroy() {
    this.titreSubscription.unsubscribe();
  }

  groupesDePays = this.dataService.getGroupesDePays();

  onGroupSelected(selectedValue: string) {
    const groupeSelectionne = selectedValue;
    this.dataService.updateTitreDuGroupeOuPays(groupeSelectionne);
    this.router.navigate(['/group', groupeSelectionne]);
  }

  goBack() {
    if (this.previousSelectedGroup) {
      this.dataService.updateTitreDuGroupeOuPays(this.previousSelectedGroup);
    }
    window.history.back();
  }
}
