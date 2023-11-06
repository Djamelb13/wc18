import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/form-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit{
  snapForm!: FormGroup;

  constructor(
    private formDataService: FormDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
    });
  }

  onSubmitForm() {
    // Utilisez FormDataService pour gérer les données du formulaire
    this.formDataService.getDataForm(this.snapForm.value).subscribe({
      next: (response) => {
        console.log('Données enregistrées avec succès :', response);
        // Vous pouvez effectuer des actions supplémentaires si nécessaire
      },
      error: (error) => {
        console.error('Erreur lors de lenregistrement des données :', error);
      }
    });
  }
}
