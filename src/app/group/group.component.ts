import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Group } from '../data.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],

})
export class GroupComponent implements OnInit {
  selectedGroup: Group | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

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
