import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';
import { Observable, Subscription } from 'rxjs';
import { PageTitleService } from '../title.service';
import { ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  jsonData: any;
  titreDuGroupeSelectionne: string = "";
  title!: string;
  titreDuGroupeOuPays!: string;
  titreDuGroupeOuPays$!: Observable<string>;
  groupesDePays: any[] = [];
  @Input() isHome: boolean;
  selectedGroupe: any;
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;
  private titreSubscription: Subscription;
  private pathHistory: string[] = [];
  private navigationHistory: string[] = [];
  private previousSelectedGroup!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService,
    private titleService: PageTitleService,
    private location: Location
  ) {
    this.isHome = false;
    this.titreSubscription = new Subscription();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        console.log('URL de la page :', currentUrl); // Ajout d'un log pour l'URL
        const pageTitle = this.getTitleForRoute(currentUrl);
        console.log('Titre de la page basé sur l\'URL :', pageTitle); // Ajout d'un log pour le titre
        this.titleService.setTitle(pageTitle);
      }
    });
  }

  ngOnInit() {
    this.dataService.getJSONData().subscribe(data => {
      this.jsonData = data;
      this.groupesDePays = data;
      console.log('Données chargées :', this.jsonData); // Ajout d'un log pour les données
      this.titleService.setTitle('Titre initial de la page');
    });
  }

  ngOnDestroy() {
    this.titreSubscription.unsubscribe();
  }

  onGroupSelected(nom: string) {
    if (this.jsonData) {
      const groupeSelectionne = this.jsonData.find((groupe: any) => groupe.nom === nom);
      console.log('Groupe sélectionné :', groupeSelectionne); // Ajout d'un log pour le groupe sélectionné
      if (groupeSelectionne) {
        this.selectedGroupe = groupeSelectionne;
        this.titreDuGroupeSelectionne = groupeSelectionne.nom;
        this.titleService.updateTitle('Groupe ' + groupeSelectionne.nom);
        console.log('Titre du groupe sélectionné :', this.titreDuGroupeSelectionne); // Ajout d'un log pour le titre du groupe sélectionné
        this.router.navigate(['/group', nom]);
        console.log('Navigation vers la route du groupe :', nom); // Ajout d'un log pour la navigation
      }
    }
  }

  getTitleForRoute(currentUrl: string): string {
    let pageTitle = 'Default Page Title';

    if (currentUrl === '/home') {
      pageTitle = 'Home Page';
    } else if (currentUrl === '/about') {
      pageTitle = 'About Page';
    }

    return pageTitle;
  }

  goBack() {
    this.location.back();
    console.log('Retour en arrière dans l\'historique du navigateur.'); // Ajout d'un log pour le retour en arrière
  }
}
