import { Component, OnInit } from '@angular/core';
import { FormDataService, Teams} from 'src/app/form-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.scss']
})
export class AddGroupeComponent implements OnInit {
  snapForm!: FormGroup;

  constructor(
    private formDataService: FormDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    
    console.log('composant groupe chargé');
    this.snapForm = this.formBuilder.group({
      title: [null],
    });

  }

  onSubmitForm() {
    // Définissez l'URL de votre API backend
    const apiUrl = 'http://localhost:8080/api/v1/groups';
  

    const title = this.snapForm.get('title')?.value;

    console.log('Titre à envoyer :', title);
  

    if (title) {

      const data = {
        name: title,
        // Ajoutez d'autres propriétés du modèle Group ici si nécessaire
      };
      console.log('Données à envoyer :', data);
  

      this.formDataService.postDataForm(apiUrl, data).subscribe({
        next: (response) => {
          console.log('Données enregistrées avec succès :', response);

        },
        error: (error) => {
          console.error('Erreur lors de l\'enregistrement des données :', error);
        }
      });
    } else {
      console.error('Le titre est vide. Veuillez saisir un titre valide.');
    }
  }
}
