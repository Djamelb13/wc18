import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Observable, Subscription } from 'rxjs';
import { TitleService } from '../title.service';
import { ViewChild } from '@angular/core';
import { Location } from '@angular/common';

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
  private titreSubscription: Subscription;
  private pathHistory: string[] = [];
  private navigationHistory: string[] = [];
  private previousSelectedGroup!: string;

  constructor(
    private router: Router,
    private dataService: DataService,
    private titleService: TitleService,
    private location: Location
  ) {
    this.isHome = false;
    this.titreSubscription = new Subscription();
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.titreSubscription = this.dataService.titreDuGroupeOuPays$.subscribe((titre: string) => {
      console.log('Titre mis à jour:', titre);
      this.titreDuGroupeOuPays = titre;
      this.titleService.setTitle(`Votre titre personnalisé - ${titre}`);
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
    this.titreSubscription.unsubscribe();
  }

  groupesDePays = this.dataService.getGroupesDePays();

  onGroupSelected(selectedValue: string) {
    this.pathHistory.push(this.titreDuGroupeOuPays);

    const groupeSelectionne = selectedValue;
    this.dataService.updateTitreDuGroupeOuPays(groupeSelectionne);
    this.updateTitle(groupeSelectionne);
    this.router.navigate(['/group', groupeSelectionne]);
  }

  goBack() {
    console.log('goBack called');
    if (this.pathHistory.length > 0) {
      const previousPath = this.pathHistory.pop();
      if (previousPath) {
        this.dataService.updateTitreDuGroupeOuPays(previousPath);
        this.updateTitle(previousPath);
      } else {
        console.log('No previous path available.');
      }
    } else {
      console.log('No previous path available.');
      this.location.back(); // Utilisez la méthode back() de Location pour la navigation de retour.
    }
  }


  private updateTitle(newTitle: string) {
    this.titleService.setTitle(`Votre titre personnalisé - ${newTitle}`);
    console.log(`Votre titre personnalisé - ${newTitle}`);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
