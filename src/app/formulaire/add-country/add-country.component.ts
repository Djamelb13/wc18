import { Component, OnInit } from '@angular/core';
import { FormDataService, Groups} from 'src/app/form-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  snapForm!: FormGroup;
  groups: Groups[] = [];

  constructor(
    private formDataService: FormDataService,
    private formBuilder: FormBuilder
  ) {}
 

  ngOnInit() {
    console.log('ngOninit called');
    const teamApiUrl = 'http://localhost:8080/api/v1/groups';
    this.formDataService.getDataGroup(teamApiUrl).subscribe({
      next: (response) => {
        console.log('Données recupérés avec succès :', response);
        this.groups = response;
      }
    });

    this.snapForm = this.formBuilder.group({
      country: [null],
      group: [null],
      flag: [null]
    });
    console.log('composant chargé ');
  }


  onSubmitForm() {
    console.log('formulaire envoyé');
    const apiUrl = 'http://localhost:8080/api/v1/teams';
    const country = this.snapForm.get('country')?.value;
    const group = this.snapForm.get('group')?.value;
    const flag = this.snapForm.get('flag')?.value;
    console.log('valeurs : ', country, group, flag);

    if (country && group && flag){
      const data = {
        name: country,
        flag: flag,
        group: group
      }
      console.log('Données à envoyer :', data);

      this.formDataService.postDataForm(apiUrl, data).subscribe({
        next: (response) => {
          console.log('Données enregistrées avec succès :', response)
        }
      })
    }
 
 
  }
}
