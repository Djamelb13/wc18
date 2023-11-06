import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormDataService } from 'src/app/form-data.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent {

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

  snapForm!: FormGroup;
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
