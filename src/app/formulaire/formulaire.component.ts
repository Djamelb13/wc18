import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})


export class FormulaireComponent implements OnInit {
  a:string = "Formulaire";
  ngOnInit() {
    console.log('composant formulaire chargé');
  }
}
