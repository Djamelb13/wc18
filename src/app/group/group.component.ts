import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Group } from '../data.service';
import { MatIconRegistry } from '@angular/material/icon'; // Importez MatIconRegistry
import { DomSanitizer } from '@angular/platform-browser'; // Importez DomSanitizer

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  selectedGroup: Group | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer 
  ) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const groupId = +params['id'];
      console.log(params);
      this.dataService.getGroupDetails(Number(groupId)).subscribe({
        next: group => {
          this.selectedGroup = group;
          console.log('ce groupe : ' + group.nom);
        },
        error: error => {
          console.error('Error retrieving the group:', error);
        }
      });
    });
  }
}
