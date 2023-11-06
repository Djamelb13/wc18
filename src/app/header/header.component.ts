import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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
  titreDuGroupeSelectionne: string = '';
  titreDuGroupeOuPays: string = '';
  groupeSelectionne: string = '';
  titreDuGroupeOuPays$!: Observable<string>;
  groupesDePays: any[] = [];
  @Input() isHome: boolean;
  selectedGroupe: any;
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;
  private titreSubscription: Subscription;
  private pathHistory: string[] = [];
  private navigationHistory: string[] = [];
  private previousSelectedGroup: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService,
    private titleService: PageTitleService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.isHome = false;
    this.titreSubscription = new Subscription();

    this.router.events.subscribe((event) => {
     
      if (event instanceof NavigationEnd) {
        this.route.paramMap.subscribe((params) => {
          const groupName = params.get('groupName');
          
          if (groupName !== null) {
           
            this.titleService.setTitle(groupName);
          }
        });
      }
    });
    
    
  }

  ngOnInit() {
    this.dataService.getJSONData().subscribe(data => {
      this.jsonData = data;
      this.groupesDePays = data;
      this.titreDuGroupeSelectionne = 'ID de l url';
    });
  }

  ngOnDestroy() {
    this.titreSubscription.unsubscribe();
  }

    onGroupSelected(paysName : string) {
      this.groupeSelectionne = paysName;

      this.titreDuGroupeSelectionne = paysName;
      }
      
  
    @Input() title = '';

  



  goBack() {
    this.location.back();
  }
}
