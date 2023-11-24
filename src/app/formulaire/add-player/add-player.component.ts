import { Component, OnInit } from '@angular/core';
import { FormDataService, Teams} from 'src/app/form-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit{
  snapForm!: FormGroup;
  teams: Teams[] = [];

  constructor(
    private formDataService: FormDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log('ajout player');
    this.snapForm = this.formBuilder.group({
      nom: [null],
      prenom: [null],
      pays:[null],
      poste:[null],
      championnat:[null]
    });
    const teamApiUrl = 'http://localhost:8080/api/v1/teams';
    this.formDataService.getDataTeams(teamApiUrl).subscribe({
      next: (response) => {
        console.log('Données recupérés avec succès :', response);
        this.teams = response;
      }
    });

  }

  onSubmitForm() {
    console.log('formulaire envoyé');
    const apiUrl = 'http://localhost:8080/api/v1/players';
    const nom = this.snapForm.get('nom')?.value;
    const prenom = this.snapForm.get('prenom')?.value;
    const pays = this.snapForm.get('pays')?.value;
    const poste = this.snapForm.get('poste')?.value;
    const championnat = this.snapForm.get('championnat')?.value;
    console.log('valeurs : ', nom, prenom, pays, poste, championnat);

    if (nom && prenom && pays && poste && championnat ) {
      const data = {

        firstname: nom,
        lastname: prenom,
        championship: championnat,
        position: poste,
        team: pays
      }
      this.formDataService.postDataForm(apiUrl, data).subscribe(
        {
          next: (response) => {
            console.log('données enregistrés avec succès');
          }
        }
      )
    }
  }
}
